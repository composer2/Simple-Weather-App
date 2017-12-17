/* globals module require */

'use strict';

const express = require('express');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/weather', controllers.getWeatherInfo)
        .get('/weather/:city', controllers.getWeatherInfoFromOpenWeather)
        .post('/weather', controllers.postWeatherInfo)
        .patch('/weather/:weatherId', controllers.patchWeatherInfo)
        .delete('/weather/:weatherId', controllers.deleteWeatherInfo);


    app.use(router);
};