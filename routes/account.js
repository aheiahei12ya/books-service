const express = require('express');
const { accountList } = require("../services/account");

const router = express.Router();

router.post('/list', accountList)

module.exports = router;
