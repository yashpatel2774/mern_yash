const express = require('express');
const authControllers= require('../controllers/auth-controller.js');
const router = express.Router();

router.get('/', authControllers.home);

router.post('/register', authControllers.register);

module.exports = router;