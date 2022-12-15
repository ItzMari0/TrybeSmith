import loginModel from '../models/login.model';
import { TLogin } from '../types/login.type';
import auth from '../authorization/jwt';

const loginUser = async (login: TLogin): Promise<string | number> => {
  const result: string | number = await loginModel.loginUser(login);
  if (typeof result === 'string') return 'Username or password invalid';
  const token: string = auth.tokenGenerator(result, login.username);
  return token;
};

export default {
  loginUser,
};