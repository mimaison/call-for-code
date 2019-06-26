var kafka = require('../utils/kafka');
var express = require('express');
var moment = require('moment');
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
router.post('/todos', function(req, res, next) {
    var userDetails = req.body.user;
    var event = req.body.event;

    var numOfAdults = userDetails.adults;
    var numOfChildren = userDetails.children;
    var numOfInfants = userDetails.infants;
    var numOfDisasterDays = moment.duration(moment(event.end).diff(moment(event.start))).days();
    var disaster = {
        'disaster': event,
        'before': {
            'supplies': [
                'Your family requires ' + ( (numOfAdults *2250) + (numOfChildren *1700)) * numOfDisasterDays + ' calories worth of food. These should be long-life, sealed foods that contain plenty of energy, such as tinned vegetables, packaged ready-to-eat meals and chocolate.',
                'Your family requires ' + ( ( (numOfAdults + numOfChildren + numOfInfants) * 2) * numOfDisasterDays) + ' litres of water. This should be stored in sealed, durable containers.',
                'You will require a water filtration device, kettle or other such water purification tool.',
                'Ensure you have enough supplies of  ' + userDetails.needs + ' for ' + numOfDisasterDays + 'days'
            ],
            'properties': [
                'Document state of your properties'
            ]
        },
        'during': {
            'supplies': [
                'Check all containers of food for signs of damage or water ingress. These items are not safe to consume and should be discarded.',
                'Check all containers of water for signs of damage. Any damage will mean that this water is potentially unsafe and should be purified or filtered before consumption.',
                'Each adult in your family should consume 2250 calories per day.',
                'Each child in your family should consume 1700 calories per day.',
                'Each infant in your family should consume a days worth of infant-safe food.',
                'Each person in your family should consume 2 litres of water.'
            ],
            'properties': [
                'Document state of your properties'
            ],
            'health': [
                'Report if you have medical need or urgent attention'
            ]
        },
        'after': {
            'supplies': [
                'Check the temperature of your fridge. If it is above 4.4 degrees celsius, then the food inside is unsafe and should be discarded.',
                'Check whether the items in your freezer have thawed or re-frozen. If so, the food is unsafe and should be discarded.'
            ],
            'properties': [
                'Document state of your properties'
            ],
            'health': [
                'Report if you have medical need or urgent attention'
            ]
        }
    }
    if (numOfInfants > 0) {
        disaster.before.supplies.push('Your family requires ' + numOfInfants * numOfDisasterDays+ ' days of infant-safe food.');
    }
    res.json(disaster);
});

module.exports = router;
