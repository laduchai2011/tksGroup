import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_Video_Stream from './handle/video_stream';

dotenv.config();
const router_post_video: Router = express.Router();

const handle_Video_Stream = new Handle_Video_Stream();

router_post_video.post('/', handle_Video_Stream.middle_encode_video_to_HLS);

export default router_post_video;
