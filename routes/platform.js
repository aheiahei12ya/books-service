const express = require('express');
const { platformList } = require("../services/platform");

const router = express.Router();

router.post('/list', platformList)

module.exports = router;
