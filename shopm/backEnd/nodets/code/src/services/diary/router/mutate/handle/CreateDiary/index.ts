import { mssql_server } from '@src/connect';
import { Request, Response, NextFunction } from 'express';
import { MyResponse } from '@src/dataStruct/response';
import { DiaryField, CreateDiaryBodyField } from '@src/dataStruct/diary';
import { verifyRefreshToken } from '@src/token';
import MutateDB_CreateDiary from '../../mutateDB/CreateDiary';
// import { produceTask } from '@src/queueRedis/producer';

class Handle_CreateMedication {
    private _mssql_server = mssql_server;

    constructor() {}

    setup = async (
        req: Request<Record<string, never>, unknown, CreateDiaryBodyField>,
        res: Response,
        next: NextFunction
    ) => {
        const myResponse: MyResponse<DiaryField> = {
            isSuccess: false,
        };

        await this._mssql_server.init();

        const createDiaryBody = req.body;
        const { refreshToken } = req.cookies;

        if (typeof refreshToken === 'string') {
            const verify_refreshToken = verifyRefreshToken(refreshToken);

            if (verify_refreshToken === 'invalid') {
                myResponse.message = 'Refresh-Token không hợp lệ, hãy đăng nhập lại !';
                res.status(500).json(myResponse);
                return;
            }

            if (verify_refreshToken === 'expired') {
                myResponse.message = 'Refresh-Token hết hạn, hãy đăng nhập lại !';
                res.status(500).json(myResponse);
                return;
            }

            const { id } = verify_refreshToken;
            const newDiary_cp = { ...createDiaryBody.diary };
            newDiary_cp.accountId = id;
            createDiaryBody.diary = newDiary_cp;
            res.locals.createDiaryBody = createDiaryBody;

            next();
        } else {
            myResponse.message = 'Vui lòng đăng nhập lại !';
            res.status(500).json(myResponse);
            return;
        }
    };

    main = async (_: Request, res: Response) => {
        const createDiaryBody = res.locals.createDiaryBody as CreateDiaryBodyField;

        const myResponse: MyResponse<DiaryField> = {
            isSuccess: false,
        };

        const mutateDB_createDiary = new MutateDB_CreateDiary();
        mutateDB_createDiary.set_createDiaryBody(createDiaryBody);

        const connection_pool = this._mssql_server.get_connectionPool();
        if (connection_pool) {
            mutateDB_createDiary.set_connection_pool(connection_pool);
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !';
            res.status(500).json(myResponse);
            return;
        }

        try {
            const result = await mutateDB_createDiary.run();
            if (result?.recordset.length && result?.recordset.length > 0) {
                const data = result.recordset[0];
                // produceTask<OrderField>('addOrder-to-provider', data);
                myResponse.message = 'Tạo nhật ký thành công !';
                myResponse.isSuccess = true;
                myResponse.data = data;
                res.status(200).json(myResponse);
                return;
            } else {
                myResponse.message = 'Tạo nhật ký KHÔNG thành công 1 !';
                res.status(204).json(myResponse);
                return;
            }
        } catch (error) {
            myResponse.message = 'Tạo sản phẩm KHÔNG thành công 2 !';
            myResponse.err = error;
            res.status(500).json(myResponse);
            return;
        }
    };
}

export default Handle_CreateMedication;
