import usersModel from '../models/users.model';
import { TUsers } from '../types/users.type';
import auth from '../authorization/jwt';

const createUser = async ({ id, username, vocation, level, password }: TUsers): Promise<string> => {
  await usersModel.createUser(username, vocation, level, password);
  const token = auth.tokenGenerator(id, username);
  return token;
};

export default {
  createUser,
};
