import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { productsIds } = req.body;
  const result = await ordersService.createOrder(productsIds, authorization as string);
  return res.status(201).json(result);
};

export default {
  getOrders,
  createOrder,
};
