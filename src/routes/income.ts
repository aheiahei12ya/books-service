import express from 'express';
import { incomeInitial } from '@/services/income';

const router = express.Router();

router.post('/initial', incomeInitial);

export default router;
