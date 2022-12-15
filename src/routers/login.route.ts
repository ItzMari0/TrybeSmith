import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validate from '../middlewares/loginvalidation.middleware';

const router = Router();

router.post(
  '/',
  validate.usernameValidation,
  validate.passwordValidation,
  loginController.loginUser,
);

export default router;
