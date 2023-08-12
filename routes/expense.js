const express = require('express');
const { expenseInitial } = require("../services/expense");

const router = express.Router();

router.post('/initial', expenseInitial)

module.exports = router;
