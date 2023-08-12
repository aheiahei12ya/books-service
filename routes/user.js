const express = require('express');
const { userLogin, userInfo } = require("../services/user");

const router = express.Router();

router.post('/login', userLogin)
router.post('/info', userInfo)

module.exports = router;
