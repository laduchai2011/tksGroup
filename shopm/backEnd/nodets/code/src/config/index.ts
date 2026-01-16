import dotenv from 'dotenv';
import my_interface from '@src/interface';
// import { getEnv } from '@src/mode';
// import { myEnv } from '@src/mode/type';

dotenv.config();

// const mssql_config: my_interface['mssql']['config'] = {
//     host: process.env.MSSQL_SERVER_HOST || '127.0.0.1',
//     port: Number(process.env.MSSQL_SERVER_POST) || 1433,
//     database: process.env.MSSQL_SERVER_DATABASE || 'shopm',
//     username: process.env.MSSQL_SERVER_USERNAME || 'sa',
//     password: process.env.MSSQL_SERVER_PASSWORD || '201195laducHai',
// };

// const redis_config: my_interface['redis']['config'] = {
//     host: process.env.REDIS_SERVER_HOST || '127.0.0.1',
//     port: Number(process.env.REDIS_SERVER_POST) || 6379,
//     username: process.env.REDIS_SERVER_USERNAME || '',
//     password: process.env.REDIS_SERVER_PASSWORD || '',
// };

const mssqlConfig = (): my_interface['mssql']['config'] => {
    // switch (getEnv()) {
    //     case myEnv.Dev: {
    //         const mssql_config: my_interface['mssql']['config'] = {
    //             host: '127.0.0.1',
    //             port: 1433,
    //             database: 'shopm',
    //             username: 'sa',
    //             password: '201195laducHai',
    //         };
    //         return mssql_config;
    //     }
    //     case myEnv.Prod: {
    //         const mssql_config: my_interface['mssql']['config'] = {
    //             host: process.env.MSSQL_SERVER_HOST,
    //             port: Number(process.env.MSSQL_SERVER_POST),
    //             database: process.env.MSSQL_SERVER_DATABASE,
    //             username: process.env.MSSQL_SERVER_USERNAME,
    //             password: process.env.MSSQL_SERVER_PASSWORD,
    //         };
    //         return mssql_config;
    //     }
    //     case myEnv.Test: {
    //         const mssql_config: my_interface['mssql']['config'] = {
    //             host: process.env.MSSQL_SERVER_HOST,
    //             port: Number(process.env.MSSQL_SERVER_POST),
    //             database: process.env.MSSQL_SERVER_DATABASE,
    //             username: process.env.MSSQL_SERVER_USERNAME,
    //             password: process.env.MSSQL_SERVER_PASSWORD,
    //         };
    //         return mssql_config;
    //     }
    //     default: {
    //         const mssql_config: my_interface['mssql']['config'] = {
    //             host: '127.0.0.1',
    //             port: 1433,
    //             database: 'shopm',
    //             username: 'sa',
    //             password: '201195laducHai',
    //         };
    //         return mssql_config;
    //     }
    // }
    const mssql_config: my_interface['mssql']['config'] = {
        host: process.env.MSSQL_SERVER_HOST,
        port: Number(process.env.MSSQL_SERVER_POST),
        database: process.env.MSSQL_SERVER_DATABASE,
        username: process.env.MSSQL_SERVER_USERNAME,
        password: process.env.MSSQL_SERVER_PASSWORD,
    };
    return mssql_config;
};

const redisConfig = (): my_interface['redis']['config'] => {
    // switch (getEnv()) {
    //     case myEnv.Dev: {
    //         const redis_config: my_interface['redis']['config'] = {
    //             host: '127.0.0.1',
    //             port: 6379,
    //             username: 'shopm',
    //             password: 'hai20111995',
    //         };
    //         return redis_config;
    //     }
    //     case myEnv.Prod: {
    //         const redis_config: my_interface['redis']['config'] = {
    //             host: process.env.REDIS_SERVER_HOST,
    //             port: Number(process.env.REDIS_SERVER_POST),
    //             username: process.env.REDIS_SERVER_USERNAME,
    //             password: process.env.REDIS_SERVER_PASSWORD,
    //         };
    //         return redis_config;
    //     }
    //     case myEnv.Test: {
    //         const redis_config: my_interface['redis']['config'] = {
    //             host: process.env.REDIS_SERVER_HOST,
    //             port: Number(process.env.REDIS_SERVER_POST),
    //             username: process.env.REDIS_SERVER_USERNAME,
    //             password: process.env.REDIS_SERVER_PASSWORD,
    //         };
    //         return redis_config;
    //     }
    //     default: {
    //         const redis_config: my_interface['redis']['config'] = {
    //             host: '127.0.0.1',
    //             port: 6379,
    //             username: 'shopm',
    //             password: 'hai20111995',
    //         };
    //         return redis_config;
    //     }
    // }
    const redis_config: my_interface['redis']['config'] = {
        host: process.env.REDIS_SERVER_HOST,
        port: Number(process.env.REDIS_SERVER_PORT),
        username: process.env.REDIS_SERVER_USERNAME,
        password: process.env.REDIS_SERVER_PASSWORD,
    };
    return redis_config;
};

export { mssqlConfig, redisConfig };
