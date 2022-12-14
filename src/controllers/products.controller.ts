import { Request, Response } from 'express';
import productsService from '../services/products.service';

const createProduct = async ({ body }: Request, res: Response) => {
  const product = await productsService.createProduct(body);
  return res.status(201).json(product);
};

const getProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getProducts();
  return res.status(200).json(products);
};

export default {
  createProduct,
  getProducts,
};
