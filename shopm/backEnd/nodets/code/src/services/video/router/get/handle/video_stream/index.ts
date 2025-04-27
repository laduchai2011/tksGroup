// import { mssql_server } from '@src/connect';
import { Request, Response, NextFunction } from 'express';
// import my_interface from '@src/interface';
import { spawnSync } from 'child_process';
// import { COMMAND_Encode_Video_To_HLS } from './const';
import ffmpegPath from 'ffmpeg-static';
import { handle_cmd } from './util';
import path from 'path';
import fs from 'fs';
import { query_options } from '../../type';

const root_path = process.cwd();
// const configPath = path.resolve(__dirname, 'config', 'config.json');
// console.log(1111111, configPath);

class Handle_Video_Stream {
    constructor() {}

    middle_encode_video_to_HLS = (
        req: Request<Record<string, never>, unknown, unknown, query_options>
        // res: Response,
        // next: NextFunction
    ) => {
        if (ffmpegPath) {
            const video_name: string = req.query.video_name;

            if (video_name) {
                const input_dir: string = path.join(root_path, 'data', 'video', 'input');
                const output_dir: string = path.join(root_path, 'data', 'video', 'output', video_name);

                if (!fs.existsSync(output_dir)) {
                    fs.mkdirSync(output_dir, { recursive: true });
                }

                const cmd = handle_cmd({
                    input_dir: input_dir,
                    input_file: video_name,
                    output_dir: output_dir,
                    resolution: { w: '1920', h: '720' },
                });

                // const ff = spawn(ffmpegPath, cmd, { shell: true });

                // ff.stderr.on('data', (data) => console.log(data.toString()));
                // ff.on('close', (code) => console.log(`Exited with code ${code}`));

                const ff = spawnSync(ffmpegPath, cmd);

                const stdout = ff.stdout;
                // const stderr = ff.stderr;
                // const status = ff.status;

                console.log(111111, stdout);
            } else {
                console.warn('video_name must is a string !');
            }
        }
    };

    main = async (req: Request, res: Response) => {};
}

export default Handle_Video_Stream;
