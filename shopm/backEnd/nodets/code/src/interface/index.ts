import { config as mssql_config } from './mssql';
import { config as redis_config } from './redis';
import { infor as video_infor } from './video';

interface mssql_interface {
    config?: mssql_config;
}

interface redis_interface {
    config?: redis_config;
}

interface router_res_type {
    message: string;
    status: '' | 'success' | 'failure' | 'warn-error';
    error: unknown;
    data: unknown;
}

interface video_interface {
    infor: video_infor;
}

interface my_interface {
    mssql: mssql_interface;
    redis: redis_interface;
    router_res_type: router_res_type;
    video: video_interface;
}

export default my_interface;
