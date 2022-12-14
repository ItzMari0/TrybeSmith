import usersModel from '../models/users.model';
import { TUsers } from '../types/users.type';
import { tokenGenerator } from '../authorization/jwt';

const createUser = async ({ username, vocation, level, password }: TUsers): Promise<string> => {
  await usersModel.createUser(username, vocation, level, password);
  const token = tokenGenerator(username);
  return token;
};

export default {
  createUser,
};
