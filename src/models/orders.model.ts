import { RowDataPacket } from 'mysql2';
import { TOrders } from '../types/orders.type';
import connection from './connection';

const getOrders = async (): Promise<TOrders[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TOrders[]>(
    `SELECT a.id, a.user_id as userId, JSON_ARRAYAGG(b.id) as productsIds FROM Trybesmith.orders AS a
    INNER JOIN Trybesmith.products AS b WHERE b.order_id = a.id GROUP BY a.id;`,
  );
  return orders;
};

export default {
  getOrders,
};
