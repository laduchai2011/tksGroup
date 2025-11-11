import { mssql_server } from '@src/connect';
import { Request, Response } from 'express';
import { MyResponse } from '@src/dataStruct/response';
import { PagedDiaryField, DiaryField, DiaryBodyField } from '@src/dataStruct/diary';
import QueryDB_GetDiarys from '../../queryDB/GetDiarys';

class Handle_GetDiarys {
    private _mssql_server = mssql_server;

    constructor() {}

    main = async (req: Request<Record<string, never>, unknown, DiaryBodyField>, res: Response) => {
        const diaryBody = req.body;

        const myResponse: MyResponse<PagedDiaryField> = {
            isSuccess: false,
        };

        await this._mssql_server.init();

        const queryDB_getDiarys = new QueryDB_GetDiarys();
        queryDB_getDiarys.setDiaryBody(diaryBody);

        const connection_pool = this._mssql_server.get_connectionPool();
        if (connection_pool) {
            queryDB_getDiarys.set_connection_pool(connection_pool);
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !';
            res.status(500).json(myResponse);
            return;
        }

        try {
            const result = await queryDB_getDiarys.run();
            if (result?.recordset.length && result?.recordset.length > 0) {
                const rows: DiaryField[] = result.recordset;
                myResponse.data = { items: rows, totalCount: result.recordsets[1][0].totalCount };
                myResponse.message = 'Lấy thông tin những nhật ký thành công !';
                myResponse.isSuccess = true;
                res.status(200).json(myResponse);
                return;
            } else {
                myResponse.message = 'Lấy thông tin những nhật ký KHÔNG thành công 1 !';
                res.status(204).json(myResponse);
                return;
            }
        } catch (error) {
            myResponse.message = 'Lấy thông tin những nhật ký KHÔNG thành công 2 !';
            myResponse.err = error;
            res.status(500).json(myResponse);
            return;
        }
    };
}

export default Handle_GetDiarys;
