import express, { Router } from 'express';
import RegisterRouter from './../register/RegisterRouter';

const router = Router();
router.use(express.json());

router.use('/register', RegisterRouter);

export default router;
