import Router from 'express';
import multer from 'multer';
import uploadController from '../controllers/upload.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import adminPostController from '../controllers/adminPost.controller.js';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.post('/creatTokin', adminPostController.creatTokin);
router.post('/upload/projects', authMiddleware, upload.single('file'), uploadController.upload);


export default router; 