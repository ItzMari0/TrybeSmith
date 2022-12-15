import { RowDataPacket } from 'mysql2';
import { TLogin } from '../types/login.type';
import connection from './connection';

const loginUser = async (login: TLogin): Promise<string | number> => {
  const [[userLogin]] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [login.username],
  );
  const [[passwordLogin]] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE password = ?;',
    [login.password],
  );
  if (!userLogin || !passwordLogin) {
    return 'Username or password invalid';
  }
  return userLogin.id;
};

export default {
  loginUser,
};
