import dotevn from 'dotenv';
import { createClient } from 'redis';
import { redis_config } from '@src/config';
import my_interface from '@src/interface';
import { my_log } from '@src/log';

dotevn.config();

class REDIS_Server {
    private static instance: REDIS_Server;

    constructor() {
        if (!REDIS_Server.instance) {
            const redisConfig: string = `redis://${redis_config?.username}:${redis_config?.password}@${redis_config?.host}:${redis_config?.port}`;

            const redisClient = createClient({
                url: redisConfig, // Adjust if using a different host or port
            });

            redisClient.on('error', (err) => {
                console.error('Redis Client Error', err);
            });

            redisClient
                .connect()
                .then(() => {
                    my_log.withGreen('REDIS_Server connected successly !');
                })
                .catch((err) => {
                    console.error(err);
                });

            REDIS_Server.instance = this;
        }

        return REDIS_Server.instance;
    }

    get_myConfig(): my_interface['redis']['config'] {
        return redis_config;
    }
}

export default REDIS_Server;
