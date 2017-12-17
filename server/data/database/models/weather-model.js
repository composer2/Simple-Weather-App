/* globals require module */

'use strict';

const mongoose = require('mongoose');
const weatherSchema = mongoose.Schema({
    date: String,
    coord: {
        lon: {
            type: Number
        },
        lat: {
            type: Number
        },
    },
    weather: {
        id: {
            type: Number
        },
        main: {
            type: String
        },
        description: {
            type: String
        },
        icon: {
            type: String
        },
    },
    base: {
        type: String
    },
    main: {
        temp: {
            type: Number
        },
        pressure: {
            type: Number
        },
        humidity: {
            type: Number
        },
        temp_min: {
            type: Number
        },
        temp_max: {
            type: Number
        },
        sea_level: {
            type: Number
        },
        grnd_level: {
            type: Number
        },
    },
    wind: {
        speed: {
            type: Number
        },
        deg: {
            type: Number
        }
    },
    clouds: {
        all: {
            type: Number
        },
    },
    dt: {
        type: Number
    },
    sys: {
        message: {
            type: Number
        },
        country: {
            type: String
        },
        sunrise: {
            type: Number
        },
        sunset: {
            type: Number
        },
    },
    id: {
        type: Number
    },
    name: {
        type: String
    },
    cod: {
        type: Number
    }

}, { timestamps: true });
//after 3h and 10m the collection will expire and will be auto deleted from the base
weatherSchema.index({ createdAt: 1 }, { expireAfterSeconds: 11400 });
module.exports = mongoose.model('Weather', weatherSchema);