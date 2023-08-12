const express = require('express');
const { expenseTrend, balanceTrend, expenseHistogram } = require("../services/statistic/trend");
const { expenseTimes, historyToday, methodReminder, classification } = require("../services/statistic");

const router = express.Router();

router.post('/expense-trend', expenseTrend)
router.post('/balance-trend', balanceTrend)
router.post('/expense', expenseHistogram)
router.post('/expense-times', expenseTimes)
router.post('/history-today', historyToday)
router.post('/method-reminder', methodReminder)
router.post('/classification', classification)

module.exports = router;
