import express from 'express';
import { expenseInitial } from '@/services/expense';

const router = express.Router();

router.post('/initial', expenseInitial);

export default router;
