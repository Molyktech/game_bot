'use strict';
let express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const config       = require('./Config');
const server       = express();
const mongoose     = require('mongoose');
const TeamInfo     = require('./API/Models/TeamInfo'); //created model loading here
const GameSchedule = require('./API/Models/GameSchedule');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./API/Routes/Routes'); //importing route
routes(server); //register the route

const PORT = process.env.PORT || 8000;



server.listen((PORT), function () {
    console.log("Server is up and listening on port " + PORT);
});