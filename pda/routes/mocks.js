var kafka = require('../utils/kafka');
var express = require('express');
var router = express.Router();

// Mock disaster
router.post('/disaster', function(req, res, next) {

    var key = req.body.type;
    var event = req.body;

    kafka.emit(key, event).then(function(fulfilled) {
        console.log('Emitted ' + JSON.stringify(event));
        res.json(event);
    }).catch( function(err){
        console.log('Rejected' + err);  
        res.status(500).send('Error occured');
    });
});

// Mock todo list generation
router.post('/todo', function(req, res, next) {
    var userDetails = req.body;
    console.log('in todo router ' + JSON.stringify(userDetails));
    var todos = {
        'start': userDetails.event.start,
        'end': userDetails.event.end,
        'before': {
            'supplies': [
                'Gather x amount of supplies'
            ],
            'properties': [
                'Document state of your properties'
            ]
        },
        'during': {
            'supplies': [],
            'properties': [
                'Document state of your properties'
            ],
            'health': []
        },
        'after': {
            'properties': [
                'Document state of your properties'
            ],
            'health': []
        }
    }
    res.json(todos);
});

module.exports = router;
