const express = require('express');
const { methodList } = require("../services/method");

const router = express.Router();

router.post('/list', methodList)

module.exports = router;
