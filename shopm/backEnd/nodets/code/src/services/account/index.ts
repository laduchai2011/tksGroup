import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import router_get_account from './router/get';
import router_post_account from './router/post';

const service_account: Express = express();

service_account.use(`/get`, router_get_account);
service_account.use(`/post`, router_post_account);

export default service_account;
