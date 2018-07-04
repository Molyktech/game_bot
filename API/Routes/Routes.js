'use strict';

var express = require('express');
var gameDataController = require('../Controllers/DataController2');

module.exports = function(app) {
var apiRoutes =  express.Router();

  app.get('/',function(req,res) {
      res.send('Welcome to Paddy Lift');
  });

  
  app.post('/webhook', (req,res)=> {
    console.log('receives as post request');
    if(!req.body)
      return res.sendStatus(400);
    res.setHeader('Content-Type', 'application/json');
    console.log('here is the post from dialogflow');
    console.log(req.body);
    let response = "" //default response from the webhook to show its working.
    responseObj = {
      "fufillmentText": response,
      "fufillmentMessages":[{"text": {"text": [w]}}],
      "source": ""
    }
    console.log('response from dialogflow');
    console.log(responseObj);
    return res.json(responseObj);

  });

 /* app.post('/welcome', (req, res) => {
    var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.action
      ? req.body.result.parameters.action
      : "I do not understand that, please can you say that again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "action-codelabs"
  });
});*/

  
  
  app.post('/ask', (req,res) => {
    if (req.body.result.action == "input.welcome") {
      return res.json({
        speech: "hi there",
        displayText: "hi there",
        source: 'action-codelabs'
    });
  }
  });
};
