/* globals require module global */
'use strict';

const mongoose = require('mongoose');
var weatherData = require('../data/openWeatherData');

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
        //The API for the weather forecast is updated every 3h
        setInterval(function() { weatherData(); }, 3600000);
        console.log('We are now connected to connected to: ' + config.connectionString)
    });
};