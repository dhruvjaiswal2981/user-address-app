const express = require('express');
const router = express.Router();
const { createUserWithAddress } = require('../controllers/userController');


router.post('/user', createUserWithAddress);

module.exports = router;
