import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const router = Router();

router.post('/', ordersController.getOrders);

export default router;
