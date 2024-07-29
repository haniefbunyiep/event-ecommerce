import { Router } from 'express';
import { userRegister } from './RegisterController';

const router = Router();

router.use('/', userRegister);

export default router;
