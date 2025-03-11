import sql from 'mssql';
import { mssql_server } from '@src/connect';

import { login_method_type } from './type';

class Query_Account {
    private _connectionPool: sql.ConnectionPool | undefined;

    constructor() {
        this._connectionPool = mssql_server.get_connectionPool();
    }

    login(login_infor: login_method_type) {
        if (this._connectionPool) {
            this._connectionPool.query(
                `SELECT * FROM dbo.Login('${login_infor.username}', '${login_infor.password}');`
            );
        }
    }
}

export default Query_Account;
