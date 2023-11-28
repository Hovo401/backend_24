import Router from 'express';
import userController from '../controllers/download.controller.js'

const router = Router();

router.get('/download', userController.download);

export default router; 