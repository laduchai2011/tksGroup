import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_CreateShoppingCart from './handle/CreateShoppingCart';

dotenv.config();

const router_mutate_shoppingCart: Router = express.Router();
const handle_createShoppingCart = new Handle_CreateShoppingCart();

router_mutate_shoppingCart.post('/createShoppingCart', handle_createShoppingCart.setup, handle_createShoppingCart.main);

export default router_mutate_shoppingCart;
