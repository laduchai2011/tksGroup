// import { mssql_server } from '@src/connect';
import { Request, Response, NextFunction } from 'express';
import my_interface from '@src/interface';
import { spawnSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { handle_cmd } from './util';
import path from 'path';
import fs from 'fs';
import { resolution_options } from './type';
import { MyRequest } from '../../type';

const root_path = process.cwd();

class Handle_Upload {
    constructor() {}

    middle_upload = async (req: Request, res: Response, next: NextFunction) => {
        const myReq = req as MyRequest;
        myReq.video_name = 'video.mp4';

        const resData: my_interface['router_res_type'] = {
            message: 'middle_upload have a error',
            status: '',
            error: '',
            data: '',
        };

        if (myReq.video_name) {
            next();
        } else {
            res.json(resData);
        }
    };

    middle_encode_video_to_HLS = async (req: Request, res: Response, next: NextFunction) => {
        const myReq = req as MyRequest;

        const resData: my_interface['router_res_type'] = {
            message: '',
            status: '',
            error: '',
            data: '',
        };

        let isSuccess: boolean = false;

        const video_name: string = myReq.video_name;
        // const video_name: string = 'video.mp4';

        if (video_name) {
            const input_dir: string = path.join(root_path, 'data', 'video', 'input');
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

            try {
                const ff_all = await Promise.all([ff_1920_1080, ff_1280_720, ff_854_480]);

                console.log(ff_all);

                const sourcePath = path.join(__dirname, 'master.m3u8');
                const destinationPath = path.join(output_dir, 'master.m3u8');
                fs.copyFileSync(sourcePath, destinationPath);
                isSuccess = true;
            } catch (error) {
                resData.message = 'This is a error !';
                resData.status = 'failure';
                resData.error = error;
                resData.data = null;
            }
        } else {
            resData.message = 'Name of video must is a string !';
            resData.status = 'failure';
            resData.error = null;
            resData.data = null;
        }

        if (isSuccess) {
            next();
        } else {
            res.json(resData);
        }
    };

    main = (req: Request, res: Response) => {
        const myReq = req as MyRequest;
        const video_name: string = myReq.video_name;

        const resData: my_interface['router_res_type'] = {
            message: `Video (${video_name}) is uploaded successly !`,
            status: 'success',
            error: null,
            data: '',
        };

        res.json(resData);
    };
}

export default Handle_Upload;
