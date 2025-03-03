import dotevn from "dotenv";
import { createClient } from "redis";
import { redis_config } from "src/config";

dotevn.config();


class REDIS_Server {

    private static instance: REDIS_Server;

    constructor () {
        if (!REDIS_Server.instance) {
            const redisConfig: string = `redis://${redis_config?.username}:${redis_config?.password}@${redis_config?.host}:${redis_config?.port}`;
    
            
        
            REDIS_Server.instance = this;
        }
       
        return REDIS_Server.instance;
    } 

    // get_myConfig(): my_interface['mssql']['config'] {
    //     return mssql_config;
    // }
}

export default REDIS_Server;