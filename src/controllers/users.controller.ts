import { Request, Response } from 'express';
import usersService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const token = await usersService.createUser(req.body);
  return res.status(201).json({ token });
};

export default {
  createUser,
};
