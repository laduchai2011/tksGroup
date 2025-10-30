import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_GetMedications from './handle/GetMedications';

dotenv.config();
const router_query_medication: Router = express.Router();

const handle_getMedications = new Handle_GetMedications();

router_query_medication.get('/getMedications', handle_getMedications.main);

export default router_query_medication;
