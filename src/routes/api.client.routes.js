import Router from 'express';
import clientGetController from '../controllers/clientGet.controller.js';
import clientPostController from '../controllers/clientPost.controler.js';

const router = Router();

router.get('/projectsItems', clientGetController.getprojectsItems_);
router.get('/services_pricesItems', clientGetController.getServices_pricesItems_);
router.post('/messages', clientPostController.postCreatMessage);

export default router; 