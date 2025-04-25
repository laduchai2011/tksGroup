import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_Video_Stream from './handle/video_stream';

dotenv.config();
const router_get_video: Router = express.Router();

const handle_Video_Stream = new Handle_Video_Stream();

router_get_video.get('/', handle_Video_Stream.middle_encode_video_to_HLS);

export default router_get_video;
