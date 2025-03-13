import dotenv from 'dotenv';
import sql, { config } from 'mssql';
import { mssql_config } from '@src/config';
import my_interface from '@src/interface';
import { my_log } from '@src/log';

dotenv.config();

class MSSQL_Server {
    private static instance: MSSQL_Server;
    private _connectionPool: sql.ConnectionPool | undefined;

    constructor() {
        if (!MSSQL_Server.instance) {
            const sqlConfig: config = {
                user: mssql_config?.username,
                password: mssql_config?.password,
                database: mssql_config?.database,
                server: mssql_config?.host ? mssql_config?.host : '',
                port: mssql_config?.port,
                pool: {
                    max: 10,
                    min: 0,
                    idleTimeoutMillis: 30000,
                },
                options: {
                    // encrypt: true, // for azure
                    // trustServerCertificate: false // change to true for local dev / self-signed certs
                    encrypt: false, // Tắt mã hóa
                    trustServerCertificate: true, // Bỏ qua kiểm tra chứng chỉ
                },
            };

            sql.connect(sqlConfig)
                .then((ConnectionPool: sql.ConnectionPool) => {
                    my_log.withGreen('MSSQL_Server connected successly !');
                    this._connectionPool = ConnectionPool;
                })
                .catch((err) => {
                    console.error(err);
                });

            MSSQL_Server.instance = this;
        }

        return MSSQL_Server.instance;
    }

    get_myConfig(): my_interface['mssql']['config'] {
        return mssql_config;
    }

    get_connectionPool(): sql.ConnectionPool | undefined {
        return this._connectionPool;
    }
}

export default MSSQL_Server;
