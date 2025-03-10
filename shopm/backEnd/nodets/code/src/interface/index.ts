import { config as mssql_config } from './mssql';
import { config as redis_config } from './redis';

interface mssql_interface {
    config?: mssql_config;
}

interface redis_interface {
    config?: redis_config;
}

interface my_interface {
    mssql: mssql_interface;
    redis: redis_interface;
}

export default my_interface;
