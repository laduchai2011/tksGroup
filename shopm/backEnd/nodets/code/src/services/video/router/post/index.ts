import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_Upload from './handle/upload';

dotenv.config();
const router_post_video: Router = express.Router();

const handle_Upload = new Handle_Upload();

router_post_video.post(
    '/upload',
    handle_Upload.middle_upload,
    handle_Upload.middle_encode_video_to_HLS,
    handle_Upload.main
);

export default router_post_video;
