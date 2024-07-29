import { Request, Response, NextFunction } from 'express';
import { userRegisterService } from './RegisterService';
import { HashingPassword } from '../../helpers/HashingPassword';

export const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    await userRegisterService({ fullname, email, password, confirmPassword });

    return res.status(201).send({
      error: false,
      message: 'User Register Success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
