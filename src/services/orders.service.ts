import ordersModel from '../models/orders.model';
import { TOrders } from '../types/orders.type';
import auth from '../authorization/jwt';

const getOrders = async (): Promise<TOrders[]> => {
  const result = await ordersModel.getOrders();
  return result;  
};

const createOrder = async (productsIds: number[], authorization: string) => {
  const payload = auth.tokenVerify(authorization);
  await ordersModel.createOrder(payload.id, productsIds);
  return { userId: payload.id, productsIds };
};

export default {
  getOrders,
  createOrder,
};
