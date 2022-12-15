import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/loginvalidation.middleware';

const router = Router();

router.post(
  '/',
  validateLogin.usernameValidation,
  validateLogin.passwordValidation,
  loginController.loginUser,
);

export default router;
