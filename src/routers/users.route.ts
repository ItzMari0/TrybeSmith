import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validate from '../middlewares/userValidation.middleware';

const router = Router();

router.post(
  '/',
  validate.usernameValidation,
  validate.vocationValidation,
  validate.levelValidation,
  validate.passwordValidation,
  usersController.createUser,
);

export default router;
