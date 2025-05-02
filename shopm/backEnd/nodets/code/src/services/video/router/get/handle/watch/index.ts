// import { mssql_server } from '@src/connect';
import { Request, Response } from 'express';
import { parameter_options } from '../../type';
import path from 'path';

const root_path = process.cwd();

class Handle_Watch {
    constructor() {}

    main = async (req: Request<Record<string, never>, unknown, unknown, parameter_options>, res: Response) => {
        const id = req.query.id;
        const filePath = path.join(root_path, 'data', 'video', 'output', id, `master.m3u8`);

        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');

        res.sendFile(filePath);
    };
}

export default Handle_Watch;
