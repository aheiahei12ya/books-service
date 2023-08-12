const express = require('express');
const { paymentMethodList } = require("../services/paymentMethod");

const router = express.Router();

router.post('/list', paymentMethodList)

module.exports = router;
