import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TOrders } from '../types/orders.type';
import connection from './connection';

const getOrders = async (): Promise<TOrders[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TOrders[]>(
    `SELECT a.id, a.user_id as userId, JSON_ARRAYAGG(b.id) as productsIds 
    FROM Trybesmith.orders AS a
    INNER JOIN Trybesmith.products AS b WHERE b.order_id = a.id GROUP BY a.id;`,
  );
  return orders;
};

const createOrder = async (
  userId: number,
  productsIds: number[],
): Promise<void> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?);',
    [userId],
  );
  await Promise.all(productsIds.map(async (idProduct) => {
    await connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;',
      [insertId, idProduct],
    );
  }));
};

export default {
  getOrders,
  createOrder,
};
