import sql from 'mssql';
import { mssql_server } from '@src/connect';
import { Request, Response, NextFunction } from 'express';
import QueryDB_Login from '../../queryDB/login';

class Middle_Login {
    private _mssql_server = mssql_server;
    private _queryDB_login;

    constructor() {
        this._queryDB_login = new QueryDB_Login();
    }

    main(req: Request, res: Response, next: NextFunction) {
        const userName = req.query.userName;
        const password = req.query.password;
        if (typeof userName === 'string' && typeof password === 'string') {
            this._queryDB_login.set_infor_input({ userName: userName, password: password });
            const connection_pool = this._mssql_server.get_connectionPool();
            if (connection_pool !== undefined) {
                this._queryDB_login.set_connection_pool(connection_pool);
            } else {
                console.log(1);
            }
        }
        res.send('(GET) Express + TypeScript Server: router_get_account');
    }
}

export default Middle_Login;
