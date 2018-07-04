'use strict';

var express = require('express');
var gameDataController = require('../Controllers/DataController2');

module.exports = function(app) {
var apiRoutes =  express.Router();

  app.get('/',function(req,res) {
      res.send('Welcome to Paddy');
  });

  // registerUser Route
  app.get('/welcome', (req, res) => {
    var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.fufillmentText
      ? req.body.result.parameters.fufillmentText
      : "I do not understand that, please can you say that again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "Default Welcome Intent"
  });
});

  
  
  app.post('/ask', gameDataController.processRequest);
};
