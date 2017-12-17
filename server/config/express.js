/* globals require module */

const express = require('express'),
    expressSession = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    path = require('path'),
    hbs = require('express-handlebars');


let app = express();
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: 'server/views/layouts/' }));
app.set('view engine', 'hbs');
app.set('views', './server/views');
app.use('/res', express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'SimpleSyrop',
    resave: true,
    saveUninitialized: true
}));

module.exports = app;