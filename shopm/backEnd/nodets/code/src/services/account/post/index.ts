import express, { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router_post_account: Router = express.Router();

router_post_account.post('/', (_: Request, res: Response) => {
    res.send('(POST) Express + TypeScript Server: router_post_account');
});

export default router_post_account;
