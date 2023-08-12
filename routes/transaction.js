const express = require('express');
const { yearList, expenseList } = require("../services/transaction");
const router = express.Router();

router.post('/year-list', yearList)
router.post('/expense', expenseList)

module.exports = router;
