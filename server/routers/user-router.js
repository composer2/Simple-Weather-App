'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/register', controllers.getRegisterPage)
        .get('/login', controllers.getLoginPage)
        .post('/register', controllers.getRegisterInfoPage)
        .post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }),
            function(req, res) {
                res.redirect('/');
            })
        .get('/logout', controllers.getLogout);

    app.use(router);
};