const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);
router.post('/login/strategic-planning', AuthController.loginStrategicPlanning);
router.get('/logout', AuthController.logout);

module.exports = router;