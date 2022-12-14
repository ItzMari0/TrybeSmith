import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

export default {
  getOrders,
};
