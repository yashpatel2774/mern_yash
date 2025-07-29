const express = require('express');
const adminController = require('../controllers/admin-controller');
const authMiddelware = require('../middlewares/auth-middleware');
const adminMinddleware = require('../middlewares/admin-middleware');

const router = express.Router();

router.get('/users', authMiddelware, adminMinddleware, adminController.getAllUsers);
router.get('/contacts', authMiddelware, adminMinddleware, adminController.getAllContacts);
router.delete('/users/:id', authMiddelware, adminMinddleware, adminController.deleteUser);
router.put('/users/:id', authMiddelware, adminMinddleware, adminController.updateUser);

module.exports = router;

