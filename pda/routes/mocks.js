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

module.exports = router;
