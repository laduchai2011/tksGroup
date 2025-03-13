import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

import service_account from './services/account';
import service_order_medication from '@src/services/order_medication';

const app: Express = express();
const port = process.env.PORT || 3007;

app.use(cookieParser());
app.use(`/api`, express.json());
app.use(`/api`, express.urlencoded({ extended: true }));

app.use(`/api/service_account`, service_account);
app.use(`/api/service_order_medication`, service_order_medication);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
