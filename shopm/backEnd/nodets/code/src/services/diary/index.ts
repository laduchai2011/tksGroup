import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import router_query_diary from './router/query';
import router_mutate_diary from './router/mutate';

const service_diary: Express = express();

service_diary.use(`/query`, router_query_diary);
service_diary.use(`/mutate`, router_mutate_diary);

export default service_diary;
