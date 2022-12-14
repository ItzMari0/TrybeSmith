import { Request, Response } from 'express';
import productsService from '../services/products.service';

const createProduct = async ({ body }: Request, res: Response) => {
  const product = await productsService.createProduct(body);
  return res.status(201).json(product);
};

export default {
  createProduct,
};
