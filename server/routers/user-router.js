'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/register', controllers.getRegisterPage)
        .get('/login', controllers.getLoginPage)
        .get('/register', controllers.getRegisterInfoPage)
        .post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
            function(req, res) {
                res.redirect('/');
            })
        .post('logout', controllers.getLogout);

    app.use(router);
};