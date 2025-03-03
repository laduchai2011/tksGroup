import dotenv from "dotenv";
import MSSQL_Server from "./mssql";

dotenv.config();



const mssql_server = new MSSQL_Server();

export { mssql_server };