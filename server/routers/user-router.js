'use strict';

const express = require('express');
const passport = require('passport');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/register', controllers.getRegister)
        .get('/login', controllers.getUserProfilePage)
        .get('/register', controllers.getUpdateInfoPage)
        .post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
            function(req, res) {
                res.redirect('/');
            })
        .post('logout', controllers.createAdmin);

    app.use(router);
};