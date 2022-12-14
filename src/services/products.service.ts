import productsModel from '../models/products.model';
import { TProducts } from '../types/products.type';

const createProduct = async ({ name, amount }: TProducts) => {
  const result = await productsModel.createProduct(name, amount);
  return result;
};

export default {
  createProduct,
};
