import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validate from '../middlewares/productValidation.middleware';

const router = Router();

router.get('/', productsController.getProducts);
router.post(
  '/',
  validate.nameValidation,
  validate.amountValidation,
  productsController.createProduct,
);

export default router;
