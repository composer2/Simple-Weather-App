/* globals module require */

'use strict';

const express = require('express');

module.exports = function(app, data) {
    let router = new express.Router(),
        controllers = require('../controllers')(data);

    router
        .get('/:city', controllers.getWeatherInfoByCity)
        .get('/documents/all', controllers.getAllInfo)
        .patch('/weather/:weatherId', controllers.patchWeatherInfo)
        .delete('/weather/:city', controllers.deleteWeatherInfo)
        .delete('/weather/delete/all', controllers.deleteAllWeatherInfo);
    app.use(router);
};