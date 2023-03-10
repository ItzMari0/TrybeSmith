import { Request, Response, NextFunction } from 'express';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  return next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
};

const productsIdsValidation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  const arrayNumbers = productsIds.every((numbers: number) => typeof numbers === 'number');
  if (!arrayNumbers || productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return next();
};

export default {
  nameValidation,
  amountValidation,
  productsIdsValidation,
};
