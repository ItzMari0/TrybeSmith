import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validate from '../middlewares/tokenValidation.middleware';
import productValidate from '../middlewares/productValidation.middleware';

const router = Router();

router.get('/', ordersController.getOrders);
router.post(
  '/',
  validate.tokenValidation,
  productValidate.productsIdsValidation,
  ordersController.createOrder,
);

export default router;
