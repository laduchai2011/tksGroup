import dotenv from "dotenv";
import sql, { config } from "mssql";
import { mssql_config } from "src/config";
import my_interface from "src/interface";

dotenv.config();


class MSSQL_Server {

    private static instance: MSSQL_Server;

    constructor () {
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
                    idleTimeoutMillis: 30000
                },
                // options: {
                //     encrypt: true, // for azure
                //     trustServerCertificate: false // change to true for local dev / self-signed certs
                // }
            }
    
            sql.connect(sqlConfig)
            .then(() => {
                console.log('MSSQL_Server connected successly !')
            }).catch((err) => {
                console.error(err)
            })
        
            MSSQL_Server.instance = this;
        }
       
        return MSSQL_Server.instance;
    } 

    get_myConfig(): my_interface['mssql']['config'] {
        return mssql_config;
    }
}

export default MSSQL_Server;