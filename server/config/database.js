/* globals require module global */
'use strict';

const mongoose = require('mongoose');
var weatherData = require('../config/openWeatherData.js');

module.exports = function(config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.connectionString, {
        useMongoClient: true
    });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        // Feed the base with initial/latest weather conditions
        weatherData();
        console.log('We are now connected to connected to: ' + config.connectionString)
    });
};