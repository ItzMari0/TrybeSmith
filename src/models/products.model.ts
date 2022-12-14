import { ResultSetHeader } from 'mysql2';
import { TProducts } from '../types/products.type';
import connection from './connection';

const createProduct = async (name: string, amount: string): Promise<TProducts> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?,?);',
    [name, amount],
  );
  return { id: insertId, name, amount };
};

export default {
  createProduct,
};
