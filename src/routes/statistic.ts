import express from 'express';
import {
  balanceTrend,
  expenseHistogram,
  expenseTrend,
} from '@/services/statistic/trend';
import {
  classification,
  expenseTimes,
  historyToday,
  methodReminder,
} from '@/services/statistic';

const router = express.Router();

router.post('/expense-trend', expenseTrend);
router.post('/balance-trend', balanceTrend);
router.post('/expense', expenseHistogram);
router.post('/expense-times', expenseTimes);
router.post('/history-today', historyToday);
router.post('/method-reminder', methodReminder);
router.post('/classification', classification);

export default router;
