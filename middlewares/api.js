const express = require('express');
const router = express.Router();

router.use('/auth', require('../routes/auth'));
router.use('/contact', require('../routes/contact'));

module.exports = router;