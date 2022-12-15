import { RowDataPacket } from 'mysql2';
import { TLogin } from '../types/login.type';
import connection from './connection';

const loginUser = async (login: TLogin): Promise<string | number> => {
  const [[userLogin]] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [login.username, login.password],
  );
  if (!userLogin) {
    return 'Username or password invalid';
  }
  return userLogin.id;
};

export default {
  loginUser,
};
