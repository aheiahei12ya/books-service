const express = require('express');
const { incomeInitial } = require("../services/income");

const router = express.Router();

router.post('/initial', incomeInitial)

module.exports = router;
