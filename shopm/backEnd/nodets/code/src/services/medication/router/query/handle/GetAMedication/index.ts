import { mssql_server } from '@src/connect';
import { Request, Response } from 'express';
import { MyResponse } from '@src/dataStruct/response';
import { MedicationField, MedicationBodyField } from '@src/dataStruct/medication';
import QueryDB_GetAMedication from '../../queryDB/GetAMedication';

class Handle_GetAMedication {
    private _mssql_server = mssql_server;

    constructor() {}

    main = async (req: Request<unknown, unknown, MedicationBodyField>, res: Response) => {
        const medicationBody = req.body;

        const myResponse: MyResponse<MedicationField> = {
            isSuccess: false,
        };

        await this._mssql_server.init();

        const queryDB_getAMedication = new QueryDB_GetAMedication();
        queryDB_getAMedication.setMedicationBody(medicationBody);

        const connection_pool = this._mssql_server.get_connectionPool();
        if (connection_pool) {
            queryDB_getAMedication.set_connection_pool(connection_pool);
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !';
            res.status(500).json(myResponse);
            return;
        }

        try {
            const result = await queryDB_getAMedication.run();
            if (result?.recordset.length && result?.recordset.length > 0) {
                myResponse.data = result?.recordset[0];
                myResponse.message = 'Lấy 1 sản phẩm thành công !';
                myResponse.isSuccess = true;
                res.status(200).json(myResponse);
                return;
            } else {
                myResponse.message = 'Lấy 1 sản phẩm KHÔNG thành công 1 !';
                res.status(204).json(myResponse);
                return;
            }
        } catch (error) {
            myResponse.message = 'Lấy 1 sản phẩm KHÔNG thành công 2 !';
            myResponse.err = error;
            res.status(500).json(myResponse);
            return;
        }
    };
}

export default Handle_GetAMedication;
