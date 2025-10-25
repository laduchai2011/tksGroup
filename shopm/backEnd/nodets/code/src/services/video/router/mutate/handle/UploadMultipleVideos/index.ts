import { Request, Response, NextFunction } from 'express';
import { spawnSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { handle_cmd } from './util';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { resolution_options } from './type';
// import { MyRequest } from '../../type';
import { MyResponse } from '@src/dataStruct/response';

const root_path = process.cwd();
const videoPath = path.join(process.cwd(), 'data', 'videos');

class Handle_UploadMultipleVideos {
    constructor() {}

    upload = (): multer.Multer => {
        if (!fs.existsSync(videoPath)) {
            fs.mkdirSync(videoPath, { recursive: true });
        }

        const storage = multer.diskStorage({
            destination: (_req, _file, cb) => cb(null, videoPath),
            filename: (_req, file, cb) => {
                const ext = path.extname(file.originalname);
                const name = path.basename(file.originalname, ext);
                cb(null, `${name}-${Date.now()}${ext}`);
            },
        });

        const fileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
            if (file.mimetype.startsWith('video/')) cb(null, true);
            else cb(new Error('Chỉ cho phép file video!'));
        };

        const uploadVideos = multer({
            storage,
            fileFilter,
            limits: { fileSize: 500 * 1024 * 1024 }, // 500MB mỗi file
        });

        return uploadVideos;
    };

    encode_video_to_HLS = async (video_name: string) => {
        const input_dir: string = path.join(root_path, 'data', 'videos');
        const output_dir: string = path.join(root_path, 'data', 'video', 'output', video_name);

        if (!fs.existsSync(output_dir)) {
            fs.mkdirSync(output_dir, { recursive: true });
        }

        // handlfunctions -----------------------------------
        const cmd = (resolution: resolution_options) => {
            return handle_cmd({
                input_dir: input_dir,
                input_file: video_name,
                output_dir: output_dir,
                resolution: resolution,
            });
        };
        const ff = (resolution: resolution_options) => {
            return new Promise((resolve, reject) => {
                if (ffmpegPath) {
                    const result = spawnSync(ffmpegPath, cmd(resolution));

                    if (result.error) {
                        reject(result.error);
                    } else {
                        resolve(result.output);
                    }
                } else {
                    reject('ffmpegPath is a null !');
                }
            });
        };
        //-------------------------------------------------

        const ff_1920_1080 = ff({ w: '1920', h: '1080' });
        const ff_1280_720 = ff({ w: '1280', h: '720' });
        const ff_854_480 = ff({ w: '854', h: '480' });

        const ff_all = await Promise.all([ff_1920_1080, ff_1280_720, ff_854_480]);

        const sourcePath = path.join(__dirname, 'master.m3u8');
        const destinationPath = path.join(output_dir, 'master.m3u8');
        fs.copyFileSync(sourcePath, destinationPath);

        return ff_all;

        // try {
        //     const ff_all = await Promise.all([ff_1920_1080, ff_1280_720, ff_854_480]);

        //     const sourcePath = path.join(__dirname, 'master.m3u8');
        //     const destinationPath = path.join(output_dir, 'master.m3u8');
        //     fs.copyFileSync(sourcePath, destinationPath);
        //     // isSuccess = true;
        //     callback(ff_all, null);
        // } catch (error) {
        //     // myResponse.message = 'This is a error !';
        //     // myResponse.err = error;
        //     callback(null, error);
        // }
    };

    middle_upload = async (req: Request, res: Response, next: NextFunction) => {
        const myResponse: MyResponse<unknown> = {
            isSuccess: false,
        };

        if (!req.files) {
            myResponse.message = 'Không có file nào được tải lên';
            res.status(400).json(myResponse);
            return;
        }

        const files = (req.files as Express.Multer.File[]).map((file) => ({
            originalName: file.originalname,
            savedName: file.filename,
            size: file.size,
            path: file.path,
        }));

        res.locals.files = files;

        next();
    };

    middle_encode_videos_to_HLS = async (req: Request, res: Response, next: NextFunction) => {
        const files = res.locals.files;
        console.log(1111111, files);

        const myResponse: MyResponse<unknown> = {
            isSuccess: false,
        };

        for (let i: number = 0; i < files.length; i++) {
            const filename = files[i].savedName;
            await this.encode_video_to_HLS(filename);
        }

        next();
    };

    main = (req: Request, res: Response) => {
        // const myReq = req as MyRequest;
        // const video_name: string = myReq.video_name;

        const myResponse: MyResponse<unknown> = {
            // message: `Video (${video_name}) is uploaded successly !`,
            isSuccess: true,
        };

        res.json(myResponse);
    };
}

export default Handle_UploadMultipleVideos;
