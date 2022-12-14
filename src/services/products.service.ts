import productsModel from '../models/products.model';
import { TProducts } from '../types/products.type';

const createProduct = async ({ name, amount }: TProducts): Promise<TProducts> => {
  const result = await productsModel.createProduct(name, amount);
  return result;
};

const getProducts = async (): Promise<TProducts[]> => {
  const result = await productsModel.getProducts();
  return result;
};

export default {
  createProduct,
  getProducts,
};
