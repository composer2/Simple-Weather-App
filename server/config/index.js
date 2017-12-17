/* globals module process */

// Connect from terminal --> 'mongo ds163667.mlab.com:63667/extreme-sports -u team-russian-standard -p maskarada' (without the quotes)
//TODO create online mongoose
let connectionString = {
    production: 'mongodb://SimpleSyrop:SimpleSyrop@simple-weather-app-shard-00-00-q6sqe.mongodb.net:27017,simple-weather-app-shard-00-01-q6sqe.mongodb.net:27017,simple-weather-app-shard-00-02-q6sqe.mongodb.net:27017/test?ssl=true&replicaSet=Simple-Weather-App-shard-0&authSource=admin',
    development: 'mongodb://localhost/simple-weather-app'
};

module.exports = {
    port: process.env.PORT || 3000,
    connectionString: connectionString['production']
};