/* globals module require */

'use strict';

const express = require('express');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/weather', controllers.getWeatherInfo)
        .get('/:city', controllers.getWeatherInfoByCity)
        .patch('/weather/:weatherId', controllers.patchWeatherInfo)
        .delete('/weather/:city', controllers.deleteWeatherInfo)
        .delete('/weather/deleteall', controllers.deleteAllWeatherInfo);
    app.use(router);
};