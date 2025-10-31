import express, { Router } from 'express';
import dotenv from 'dotenv';
import Handle_GetMedications from './handle/GetMedications';
import Handle_GetMedicationImages from './handle/GetMedicationImages';
import Handle_GetMedicationVideos from './handle/GetMedicationVideos';

dotenv.config();
const router_query_medication: Router = express.Router();

const handle_getMedications = new Handle_GetMedications();
const handle_getMedicationImages = new Handle_GetMedicationImages();
const handle_getMedicationVideos = new Handle_GetMedicationVideos();

router_query_medication.post('/getMedications', handle_getMedications.main);

router_query_medication.post('/getAllMedicationImages', handle_getMedicationImages.main);

router_query_medication.post('/getAllMedicationVideos', handle_getMedicationVideos.main);

export default router_query_medication;
