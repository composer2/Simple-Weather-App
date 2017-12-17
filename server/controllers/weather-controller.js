/* globals module */

'use strict';

const mongoose = require("mongoose");
const Weather = require("../data/database/models/weather-model");

module.exports = function(data) {
    return {
        getWeatherInfo(req, res, next) {
            Weather
                .find()
                .sort({ date: -1 })
                .exec()
                .then(result => {
                    console.log("This is my result", result);
                    res.render('weather-page', { result });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },
        getWeatherInfoByCity(req, res, next) {
            const city = req.params.city;
            console.log(city)
            Weather
                .find({ name: city })
                .sort({ date: -1 })
                .limit(1)
                .exec()
                .then(result => {
                    console.log("This is my result by city", result);
                    var [dayOfweek, month, day, year] = result[0].date.split(' ');
                    var weatherDetails = {
                        name: result[0].name,
                        wind: result[0].wind.speed,
                        tempMin: result[0].main.temp_min,
                        tempMax: result[0].main.temp_max,
                        dayOfweek: dayOfweek,
                        month: month,
                        day: day,
                        year: year,

                    }
                    res.render('weather-page', weatherDetails);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },

        patchWeatherInfo(req, res, next) {
            const id = req.params.weatherId;
            const updateOps = {};
            for (const ops of req.body) {
                updateOps[ops.propName] = ops.value;
            }
            Weather.update({ id: id }, { $set: updateOps })
                .exec()
                .then(result => {
                    console.log(result);
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },

        deleteWeatherInfo(req, res, next) {
            const city = req.params.city;
            Weather.remove({ name: city })
                .exec()
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },

        deleteAllWeatherInfo(req, res, next) {
            Weather.remove({})
                .exec().then(result => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        }
    }
}