import { redis_server } from '@src/connect';
import { RedisClientType } from 'redis';
// import { my_log } from '@src/log';


class ServiceRedis {
    private static instance: ServiceRedis;
    private _clientRedis!: RedisClientType;
    private _initPromise: Promise<void> | null = null;

    private constructor() {}

    static getInstance(): ServiceRedis {
        if (!ServiceRedis.instance) {
            ServiceRedis.instance = new ServiceRedis();
        }
        return ServiceRedis.instance;
    }

    // async init() {
    //     await redis_server.init();
    //     this._clientRedis = redis_server.get_client();
    //     this._clientRedis.on('error', err => console.error(`(ServiceRedis-constructor), err: ${err}`));
    // }

    async init() {
        if (!this._initPromise) {
            this._initPromise = (async () => {
                await redis_server.init();
                this._clientRedis = redis_server.get_client();

                if (!this._clientRedis.listeners("error").length) {
                    this._clientRedis.on("error", err =>
                        console.error(`(ServiceRedis), err: ${err}`)
                    );
                }
            })();
        }
        return this._initPromise;
    }

    async setData<T>(key: string, jsonValue: T, timeExpireat: number) {
        if (key) {
            // timeExpireat: { EX: 60*60*24 }
            const valueToString = JSON.stringify(jsonValue);
            const isSet = await this._clientRedis.set(key, valueToString, { EX: timeExpireat });
            if (isSet==='OK') {
                return true;
            }
            return false;
        } else {
            throw new Error('(ServiceRedis-setData) Invalid key type!');
        }
    }

    async getData<T>(key: string): Promise<T> {
        if (key) {
            const result = await this._clientRedis.get(key)
            if (result) {
                const valueToJson = JSON.parse(result);
                return valueToJson as T
            } else {
                throw new Error('(ServiceRedis-getData) data is null!');
            }
        } else {
            throw new Error('(ServiceRedis-getData) Invalid key type!');
        }
    }

    async deleteData(key: string) {      
        if (key) {
            const reply = await this._clientRedis.del(key);
            if (reply === 1) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new Error('(ServiceRedis-deleteData) Invalid key type!');
        }
    }
}

export default ServiceRedis;