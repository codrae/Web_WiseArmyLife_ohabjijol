"use strict";

const express = require('express');

const homeCTRL = require('./home_ctrl');
const { isLoggedIn, isNotLoggedIn } = require('../user/check_login');
const { Post, User } = require('../../models');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

/* GET home page. */
router.get('/', homeCTRL.output.home);
router.get('/login', isNotLoggedIn, homeCTRL.output.login);
router.get('/profile', isLoggedIn, homeCTRL.output.profile);
router.get('/join', isNotLoggedIn, homeCTRL.output.join);



module.exports = router;
