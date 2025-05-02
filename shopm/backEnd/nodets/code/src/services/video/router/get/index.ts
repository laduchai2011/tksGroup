import express, { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import Handle_Watch from './handle/watch';
import path from 'path';
import { parameter_options } from './type';

dotenv.config();
const router_get_video: Router = express.Router();

const handle_Watch = new Handle_Watch();

const root_path = process.cwd();

router_get_video.get('/watch', handle_Watch.main);
// router_get_video.use('/watch', express.static(path.join(root_path, 'data', 'video', 'output', 'video.mp4')));
// router_get_video.use('/watch', handle_Watch.main);

router_get_video.get(
    '/*.m3u8',
    (req: Request<Record<string, never>, unknown, unknown, parameter_options>, res: Response) => {
        const id = req.query.id;
        console.log(1111111, id, req.path);
        const filePath = path.join(root_path, 'data', 'video', 'output', id, req.path);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
        res.sendFile(filePath);
    }
);

router_get_video.get(
    '/*.ts',
    (req: Request<Record<string, never>, unknown, unknown, parameter_options>, res: Response) => {
        const id = req.query.id;
        console.log(22222222222, id, req.path);
        const filePath = path.join(root_path, 'data', 'video', 'output', id, req.path);
        res.setHeader('Content-Type', 'video/MP2T');
        res.sendFile(filePath);
    }
);

export default router_get_video;
