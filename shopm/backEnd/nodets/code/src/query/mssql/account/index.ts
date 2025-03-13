import sql from 'mssql';
import { login_method_type } from './type';
// import { my_log } from '@src/log';

class Query_Account {
    constructor() {}

    async login(
        connectionPool: sql.ConnectionPool | undefined,
        login_infor: login_method_type
    ) {
        if (connectionPool !== undefined) {
            console.log(login_infor);
            try {
                const result = await connectionPool.query(
                    `SELECT * FROM Login('${login_infor.username}', '${login_infor.password}')`
                );
                // my_log.withMagenta(result.recordsets);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default Query_Account;
