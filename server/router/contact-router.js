const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/conatct-controller.js');


router.post('/contact', contactForm);

module.exports = router;