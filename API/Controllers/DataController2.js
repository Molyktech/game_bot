'use strict';
var mongoose = require('mongoose');
var TeamInfo = mongoose.model('TeamInfo');
var GameSchedule = mongoose.model('GameSchedule');

exports.processRequest = function(req, res) {
    if (req.body.result.action == "schedule") {
        getTeamSchedule(req,res)
      }
      else if (req.body.result.action == "tell.about")
      {
          getTeamInfo(req,res)
      }
    };


    var getTeamInfo = (req,res) => {
let teamToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.team ? req.body.result.parameters.team : 'Unknown';

    
  }