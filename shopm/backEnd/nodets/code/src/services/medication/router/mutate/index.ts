import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_CreateMedication from './handle/CreateMedication';

dotenv.config();

const router_mutate_medication: Router = express.Router();
const handle_createMedication = new Handle_CreateMedication();

router_mutate_medication.post('/createMedication', handle_createMedication.setup, handle_createMedication.main);

export default router_mutate_medication;
