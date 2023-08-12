const express = require('express');
const { categoryList } = require("../services/category");

const router = express.Router();

router.post('/list', categoryList)

module.exports = router;
