# How to start it
* git clone https://github.com/composer2/Simple-Weather-App.git
* npm install;
* npm start; (note the server is running on PORT 3000 if it's busy it won't start)
* npm test (starts the unit tests)

# Simple-Weather-App
The app gathers weather forecast data from publicly available weather API, stores it in a local database, and consume it via multiple clients - web client and server client.

# Task General Description
Build a solution that gathers weather forecast data from publicly available weather API, stores it in a local database, and consume it via multiple clients - web client and server client.
# Badges to Unlock 
* Consume third party REST API which will represent your weather service. You could choose from:
    * http://openweathermap.org
    * https://www.weatherbit.io
    * another API of your choice
* Set up a database in your app where the weather data will be replicated. Database is up to you.
* Collect and store in the database temperatures by city. Fetch data periodically (the timeframe is up to you) to feed your database.
* Create ServerAPP – Node.js http server that serves your application API. The API must be convenient for different types of clients or you can design separate APIs. The architecture choice is yours as long as you can defend it.
* Write unit and integration test suite for ServerAPP with https://github.com/tapjs/node-tap test runner
* Protect your API with authentication mechanisms. Basic auth is the minimum required. Add oAuth as an optional mechanism.
* Create two clients:
    * Plain JavaScript client (PlainJSAPP) -> Consumes data served by the ServerAPP
    * UI client e.g. web application (WebAPP) -> Consumes data served by the ServerAPP
* Add configuration approaches in the client applications in respect to switching between authentication mechanisms

# Application Features
### WebAPP
* Let the user select a city for which the information will be retrieved.
* Display all available records from the database for selected by the user city, and the minimum and maximum temperatures on top, indicating the date and the season for which they were recorded.
* On initial load the app could display information for default city of your choice.

### PlainJSAPP
* Expose an API that could be reused in the WebAPP
* Logs the retrieved data on the console when used in standalone mode (outside WebAPP) 

# Notes and Deliverables
* Strive to write your code in the most maintainable and testable way you can think of
* Beyond the requirements listed above the developer is free to enhance the application as desired
* The source code must be made available on Github as a public repository
* Please include instructions on required technologies and how to install & run the application

