import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TProducts } from '../types/products.type';
import connection from './connection';

const createProduct = async (name: string, amount: string): Promise<TProducts> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?,?);',
    [name, amount],
  );
  return { id: insertId, name, amount };
};

const getProducts = async (): Promise<TProducts[]> => {
  const [products] = await connection.execute<RowDataPacket[] & TProducts[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products;
};

export default {
  createProduct,
  getProducts,
};
