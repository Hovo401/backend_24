import Router from 'express';
import userController from '../controllers/api_user.controller.js'

const router = Router();

router.get('/download', userController.download);

export default router; 