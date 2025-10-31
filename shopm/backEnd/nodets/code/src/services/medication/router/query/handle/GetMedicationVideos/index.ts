import { mssql_server } from '@src/connect';
import { Request, Response } from 'express';
import { MyResponse } from '@src/dataStruct/response';
import { MedicationVideoField, MedicationVideoBodyField } from '@src/dataStruct/medication';
import QueryDB_GetMedicationVideos from '../../queryDB/GetMedicationVideos';

class Handle_GetMedicationVideos {
    private _mssql_server = mssql_server;

    constructor() {}

    main = async (req: Request<unknown, unknown, MedicationVideoBodyField>, res: Response) => {
        const medicationVideoBody = req.body;

        const myResponse: MyResponse<MedicationVideoField[]> = {
            isSuccess: false,
        };

        await this._mssql_server.init();

        const queryDB_getMedicationVideos = new QueryDB_GetMedicationVideos();
        queryDB_getMedicationVideos.setMedicationVideoBody(medicationVideoBody);

        const connection_pool = this._mssql_server.get_connectionPool();
        if (connection_pool) {
            queryDB_getMedicationVideos.set_connection_pool(connection_pool);
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !';
            res.status(500).json(myResponse);
            return;
        }

        try {
            const result = await queryDB_getMedicationVideos.run();
            if (result?.recordset.length && result?.recordset.length > 0) {
                myResponse.data = result?.recordset;
                myResponse.message = 'Lấy thước phim sản phẩm thành công !';
                myResponse.isSuccess = true;
                res.status(200).json(myResponse);
                return;
            } else {
                myResponse.message = 'Lấy thước phim sản phẩm KHÔNG thành công 1 !';
                res.status(204).json(myResponse);
                return;
            }
        } catch (error) {
            myResponse.message = 'Lấy thước phim sản phẩm KHÔNG thành công 2 !';
            myResponse.err = error;
            res.status(500).json(myResponse);
            return;
        }
    };
}

export default Handle_GetMedicationVideos;
