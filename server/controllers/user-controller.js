/* globals module */

'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../data/database/models/user-model');


passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = (data) => {
    return {
        getLoginPage(req, res) {
            res.render('users/login-page', { user: req.user });
        },

        getRegister(req, res) {
            res.render('register');
        },

        getUserProfilePage(req, res) {
            res.render('login');
        },

        getRegisterPage(req, res) {
            res.render('users/register-page');
        },

        getFacebookCallbackPage(req, res) {
            res.render('users/profile-page', { user: req.user });
        },

        getUpdateInfoPage(req, res) {
            var name = req.body.name;
            var email = req.body.email;
            var username = req.body.username;
            var password = req.body.password;
            var password2 = req.body.password2;

            // Validation
            req.checkBody('name', 'Name is required').notEmpty();
            req.checkBody('email', 'Email is required').notEmpty();
            req.checkBody('email', 'Email is not valid').isEmail();
            req.checkBody('username', 'Username is required').notEmpty();
            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

            var errors = req.validationErrors();

            if (errors) {
                res.render('register', {
                    errors: errors
                });
            } else {
                var newUser = new User({
                    name: name,
                    email: email,
                    username: username,
                    password: password
                });

                User.createUser(newUser, function(err, user) {
                    if (err) throw err;
                    console.log(user);
                });

                req.flash('success_msg', 'You are registered and can now login');

                res.redirect('/users/login');
            }
        },

        updateUserInfo(req, res) {
            if (!req.isAuthenticated()) {
                res.render('auth-not-authorised-page', { user: req.user });
                return;
            }
            let newData = {};

            Object.keys(req.body)
                .forEach(key => {
                    if (req.body[key] && req.body[key].trim() !== '') {
                        if (key !== 'avatar') {
                            newData[key] = req.body[key];
                        } else {
                            newData.profilePicture = {
                                src: req.body[key]
                            };
                        }
                    }
                });

            data.updateUserInfo(req.user, newData)
                .then(() => {
                    res.redirect('/profile/' + req.user.username, { user: req.user });
                })
                .catch((err) => {
                    res.status(400).send(err);
                    res.redirect('/update-info');
                });
        },
        createAdmin(req, res) {
            req.logout();

            req.flash('success_msg', 'You are logged out');

            res.redirect('/users/login');
        }
    };
};