import express, { Router } from 'express';
import dotenv from 'dotenv';
import authentication from '@src/auth';
import Handle_Diary from './handle/CreateDiary';
// import Handle_UploadMultipleImages from './handle/UploadMultipleImages';

dotenv.config();

const router_mutate_diary: Router = express.Router();
const handle_diary = new Handle_Diary();
// const handle_uploadMultipleImages = new Handle_UploadMultipleImages();

router_mutate_diary.post('/createDiary', authentication, handle_diary.setup, handle_diary.main);

// router_mutate_image.post(
//     '/uploadMultipleImage',
//     authentication,
//     handle_uploadMultipleImages.upload().array('images', 30), // 👈 Cho phép tối đa 30 ảnh
//     handle_uploadMultipleImages.main
// );

export default router_mutate_diary;
