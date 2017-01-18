'use strict';

var Polls = require('../models/polls.js');

function PollHandler() {
    this.createPoll = function(req, res) {
        console.log("create a poll");
        //get poll name
        /*
        Polls
            .findOneAndUpdate({''})
        */
        var poll = new Polls({
            author: "12345",
            question: "Does this work?",
            options: {
                name: "question1",
                count: "1"
            }
        });
        
        poll.save();
        res.end();
    }
    
    this.getPolls = function(req, res) {
        Polls
            .find(function(err, result) {
                if (err) { throw err; }
                
                res.json(result);
            });
    }
}

module.exports = PollHandler;