import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_IsSignin from './handle/IsSignin';
import Handle_Login from './handle/login';

dotenv.config();
const router_query_account: Router = express.Router();

const handle_isSignin = new Handle_IsSignin();
const handle_login = new Handle_Login();

router_query_account.get('/isSignin', handle_isSignin.main);
router_query_account.get('/', handle_login.main);

export default router_query_account;
