import sql from 'mssql';
import { mssql_server } from '@src/connect';
import Query_Account from './account';

class Query_Mssql {
    private _mssql_server = mssql_server;
    private _query_account;

    constructor() {
        this._mssql_server = mssql_server;
        this._query_account = new Query_Account();
    }

    get_connectionPool(): sql.ConnectionPool | undefined {
        return this._mssql_server.get_connectionPool();
    }

    account() {
        return this._query_account;
    }
}

export default Query_Mssql;
