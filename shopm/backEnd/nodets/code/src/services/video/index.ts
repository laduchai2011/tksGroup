import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import router_get_video from './router/get';
import router_post_video from './router/post';

const service_video: Express = express();

service_video.use(`/get`, router_get_video);
service_video.use(`/post`, router_post_video);

export default service_video;
