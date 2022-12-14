import ordersModel from '../models/orders.model';
import { TOrders } from '../types/orders.type';

const getOrders = async (): Promise<TOrders[]> => {
  const result = await ordersModel.getOrders();
  return result;  
};

export default {
  getOrders,
};
