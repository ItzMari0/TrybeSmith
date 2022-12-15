import { Request, Response } from 'express';
import loginService from '../services/login.service';

const loginUser = async (req: Request, res: Response) => {
  const result = await loginService.loginUser(req.body);
  if (result === 'Username or password invalid') {
    return res.status(401).json({ message: result });
  }
  return res.status(200).json({ token: result });
};

export default {
  loginUser,
};
