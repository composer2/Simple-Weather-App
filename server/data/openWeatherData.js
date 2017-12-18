/* globals module */
'use strict';
const mongoose = require("mongoose");
const request = require('request');
const Weather = require("../data/database/models/weather-model");

var getWeatherInfoFromOpenWeather = function() {
    //call for sofia plovdiv varna burgas
    var reqUrl = `http://api.openweathermap.org/data/2.5/group?id=727011,728193,726050,732770&units=metric&appid=ffff603c2550060a9c2b94727534df66`,
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
            let data = body.list;
            for (var i = 0; i < data.length; i += 1) {
                let date = new Date();
                const weather = new Weather({
                    date: date,
                    createdAt: date,
                    coord: data[i].coord,
                    weather: data[i].weather,
                    base: data[i].base,
                    main: data[i].main,
                    wind: data[i].wind,
                    clouds: data[i].clouds,
                    dt: data[i].dt,
                    sys: data[i].sys,
                    id: data[i].id,
                    name: data[i].name,
                    cod: data[i].cod
                });
                weather.save();
            }
            console.log('-------------DONE-----------------');
        } else {
            throw new Error(body.message);
        }
    });
    // Weather.find()
    //     .exec()
    //     .then(docs => {
    //         console.log(docs);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
};
module.exports = getWeatherInfoFromOpenWeather;