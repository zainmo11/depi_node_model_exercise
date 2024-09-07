const express = require('express');
const router = express.Router();
const userController = require('./controller');

// Routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getAllUsers);

module.exports = router;
