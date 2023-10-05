import express from 'express';
import { expenseList, yearList } from '../services/transaction';

const router = express.Router();

router.post('/year-list', yearList);
router.post('/expense', expenseList);

export default router;
