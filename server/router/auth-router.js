const express = require('express');
const authControllers= require('../controllers/auth-controller.js');
const signUpSchema = require('../validators/auth-validator.js');
const validate = require('../middlewares/validate-middleware.js');
const authMiddleware = require('../middlewares/auth-middleware.js')
const router = express.Router();


router.get('/', authControllers.home);
router.post('/register', validate(signUpSchema), authControllers.register);
router.post('/login', authControllers.login);

router.get('/user', authMiddleware, authControllers.getUser)

module.exports = router;