/* globals module */

'use strict';
const mongoose = require("mongoose");
const request = require('request');
const Weather = require("../data/database/models/weather-model");
module.exports = function(data) {
    return {
        getWeatherInfo(req, res, next) {
            Weather.find()
                .exec()
                .then(result => {
                    console.log("This is my result", result);
                    res.render('weather-page', { result });
                    //res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },
        getWeatherInfoFromOpenWeather(req, res, next) {
            var city = req.params.city || "Sofia";
            var reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffff603c2550060a9c2b94727534df66`,
                username = "composer2",
                password = "6828556828",
                auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

            var options = {
                url: reqUrl,
                method: "GET",
                json: true,
                headers: {
                    "Authorization": auth
                }
            };
            request(options, function callback(error, response, body) {
                if (typeof body === "undefined") {
                    return new Error("Nothing found!");
                }
                if (!error && response.statusCode == 200) {
                    const weather = new Weather({
                        coord: body.coord,
                        weather: body.weather,
                        base: body.base,
                        main: body.main,
                        wind: body.wind,
                        clouds: body.clouds,
                        dt: body.dt,
                        sys: body.sys,
                        id: body.id,
                        name: body.name,
                        cod: body.cod
                    });
                    weather.save();
                } else {
                    throw new Error(body.message);
                }
            });
            Weather.find()
                .exec()
                .then(docs => {
                    console.log(docs);
                    res.status(200).json(docs);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        },

        postWeatherInfo(req, res, next) {
            const weather = new Weather({
                coord: req.body.coord,
                weather: req.body.weather,
                base: req.body.base,
                main: req.body.main,
                wind: req.body.wind,
                clouds: req.body.clouds,
                dt: req.body.dt,
                sys: req.body.sys,
                id: req.body.id,
                name: req.body.name,
                cod: req.body.cod
            });
            weather
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: "Handling POST requests to /weather",
                        createdWeather: result
                    });
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
            const id = req.params.weatherId;
            Weather.remove({ id: id })
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
        }
    };
};