const express = require('express');
const router = express.Router();

const ContactController = require('../controllers/ContactController');

router.post('/info', ContactController.send)

module.exports = router;