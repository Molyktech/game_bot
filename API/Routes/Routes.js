'use strict';
var express = require('express');
module.exports = function(app) {
  var gameDataController = require('../Controllers/GameDataController');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('Welcome to Paddy Lift');
  });
// registerUser Route
  app.get('/games', (req, res) => {

  })
    app.post('/ask', gameDataController.processRequest);
};