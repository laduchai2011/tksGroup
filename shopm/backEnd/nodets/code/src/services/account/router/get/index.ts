import express, { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

import Query_Mssql from '@src/query/mssql';

const query_mssql = new Query_Mssql();
const query_account = query_mssql.account();

dotenv.config();

const router_get_account: Router = express.Router();

router_get_account.get('/', (req: Request, res: Response) => {
    const username = req.query.username;
    const password = req.query.password;
    if (typeof username === 'string' && typeof password === 'string') {
        query_account.login(query_mssql.get_connectionPool(), {
            username: username,
            password: password,
        });
    }

    res.send('(GET) Express + TypeScript Server: router_get_account');
});

export default router_get_account;
