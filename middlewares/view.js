const express = require('express');
const router = express.Router();

router.use('/', require('../routes/router'));

router.use('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;