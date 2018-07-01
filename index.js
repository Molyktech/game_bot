'use strict';
const express      = require('express');
const bodyParser   = require('body-parser');
const http         = require('http');
const config       = require('./Config');
const mongoose     = require('mongoose');
const TeamInfo     = require('./API/Models/TeamInfo'); //created model loading here
const GameSchedule = require('./API/Models/GameSchedule');
const routes       = require('./API/Routes/Routes'); //importing route


// mongoose instance connection url connection
//mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

routes(server); //register the route

const PORT = process.env.PORT || 8000;

server.listen((PORT), function () {
    console.log("Server is up and listening on port " + PORT);
});