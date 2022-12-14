import { ResultSetHeader } from 'mysql2';
import { TUsers } from '../types/users.type';
import connection from './connection';

const createUser = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<void> => {
  await connection.execute<ResultSetHeader & TUsers>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUE (?,?,?,?);',
    [username, vocation, level, password],
  );
};

export default {
  createUser,
};
