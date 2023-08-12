const express = require('express');
const { settingList } = require("../services/setting");

const router = express.Router();

router.post('/list', settingList)

module.exports = router;
