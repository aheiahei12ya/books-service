const express = require('express');
const { shortcutList } = require("../services/shortcut");

const router = express.Router();

router.post('/list', shortcutList)

module.exports = router;
