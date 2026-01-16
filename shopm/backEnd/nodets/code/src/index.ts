import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import process from 'process';
import { mssql_server } from '@src/connect';
import { redis_server } from '@src/connect';
import ServiceRedis from '@src/cache/cacheRedis';
import { getEnv } from './mode';
import { myEnv } from './mode/type';

dotenv.config();

const services = (process.env.SERVICES ?? '').split(',').map((s) => s.trim());
const prefix = getEnv() === myEnv.Dev ? '/api' : '';

// import service_image from './services/image';
// import service_video from './services/video';
// import service_account from '@src/services/account';
// import service_medication from '@src/services/medication';
// import service_order_medication from '@src/services/order_medication';
// import service_shoppingCart from './services/shoppingCart';
// import service_diary from './services/diary';

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(`${prefix}`, express.json());
app.use(`${prefix}`, express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const allowedOrigins = ['http://shopm.local.com:3000'];
    const origin = req.headers.origin as string;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    // 👉 Quan trọng: xử lý preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }

    next();
});

// app.use('/api/service_image', service_image);
// app.use('/api/service_video', service_video);
// app.use('/api/service_account', service_account);
// app.use('/api/service_medication', service_medication);
// app.use('/api/service_order_medication', service_order_medication);
// app.use('/api/service_shoppingCart', service_shoppingCart);
// app.use('/api/service_diary', service_diary);

app.use(`${prefix}/hello`, (req, res) => {
    res.send(`hello: ${services}`);
});

(async () => {
    await mssql_server.init();
    await redis_server.init();

    const serviceRedis = ServiceRedis.getInstance();
    await serviceRedis.init();

    if (services.includes('image')) {
        const service_image = (await import('./services/image')).default;
        app.use(`${prefix}/service_image`, service_image);
    }

    if (services.includes('video')) {
        const service_video = (await import('./services/video')).default;
        app.use(`${prefix}/service_video`, service_video);
    }

    if (services.includes('account')) {
        const service_account = (await import('@src/services/account')).default;
        app.use(`${prefix}/service_account`, service_account);
    }

    if (services.includes('medication')) {
        const service_medication = (await import('./services/medication')).default;
        app.use(`${prefix}/service_medication`, service_medication);
    }

    if (services.includes('order_medication')) {
        const service_order_medication = (await import('./services/order_medication')).default;
        app.use(`${prefix}/service_order_medication`, service_order_medication);
    }

    if (services.includes('shoppingCart')) {
        const service_shoppingCart = (await import('@src/services/shoppingCart')).default;
        app.use(`${prefix}/service_shoppingCart`, service_shoppingCart);
    }

    if (services.includes('diary')) {
        const service_diary = (await import('@src/services/diary')).default;
        app.use(`${prefix}/service_diary`, service_diary);
    }
})();

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
