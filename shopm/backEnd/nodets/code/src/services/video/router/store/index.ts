import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_Watch from './handle/watch';

dotenv.config();
const router_store_video: Router = express.Router();

const handle_Watch = new Handle_Watch();

router_store_video.get('/watch', handle_Watch.main);

router_store_video.get('/*.m3u8', handle_Watch.main_playlist);

router_store_video.get('/*.ts', handle_Watch.main_segment);

export default router_store_video;
