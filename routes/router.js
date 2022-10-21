const express = require('express');
const router = express.Router();
var store = require('store');

router.get('/', (req, res) => {
    res.render('index', {isLoggedIn: req.session.isLoggedIn});
});

router.get('/aboutus', (req, res) => {
    res.render('aboutus', {isLoggedIn: req.session.isLoggedIn});
});

router.get('/strategicplanning', (req, res) => {
    if (req.session.isLoggedIn) {
        res.render('strategic-planning', {isLoggedIn: req.session.isLoggedIn});
    } else {
        res.redirect('/signin/strategic-planning');
    }
});

router.get('/gallery', (req, res) => {
    res.render('gallery', {isLoggedIn: req.session.isLoggedIn});
});

router.get('/contactus', (req, res) => {
    const data = store.get('contact');
    res.render('contactus', {isLoggedIn: req.session.isLoggedIn, success: false, contact: data});
});

router.get('/contactus/:path', (req, res) => {
    const { path } = req.params
    const data = store.get('contact');
    if (path === 'success') {
        res.render('contactus', {isLoggedIn: req.session.isLoggedIn, success: true, contact: data});
    } else {
        res.redirect('/contactus');
    }
});


router.get('/signin', (req, res) => {
    res.render('sign-in', {isLoggedIn: req.session.isLoggedIn, path: ''});
});

router.get('/signin/:path', (req, res) => {
    const { path } = req.params
    if (path === 'strategic-planning') {
        res.render('sign-in', {isLoggedIn: req.session.isLoggedIn, path: 'strategic-planning'});
    } else {
        res.redirect('/signin');
    }
    
});


router.get('/error', (req, res) => {
    res.render('error', {isLoggedIn: req.session.isLoggedIn});
});

module.exports = router;