var cloudant = require('../utils/cloudant');
var express = require('express');
var router = express.Router();

// Register form
router.get('/register', function(req, res, next) {
    res.render('users/register');
});

// Register submit
router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var country = req.body.country;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var adults = req.body.adults;
    var children = req.body.children;
    var infants = req.body.infants;
    var needs = req.body.needs;
    if (username && country && latitude && longitude && adults >= 0 && children >= 0 && infants >=0) {
        var user = {
            '_id': username,
            'username': username,
            'country': country,
            'latitude': latitude,
            'longitude': longitude,
            'adults': adults,
            'children': children,
            'infants': infants,
            'needs': needs
        }
        cloudant.registerUser(user, function(err, data) {
            if (err) {
                res.render('users/register', { 'error': err });
            } else {
                res.render('success', { 'message': 'You have successfully registered. PDA will notify you if a disaster is expected to affect your location.' });
            }
        });
    } else {
        res.render('users/register', { 'error': 'Missing required fields' });
    }
});

// Login
router.get('/', function(req, res, next) {
    var username = req.query.username;
    res.redirect('users/' + username);
});

// Todo
router.get('/todo', function(req, res, next) {
    var date = req.query.date;
    cloudant.getUser(username, function(err, data) {
        res.json(data);
    });
});

// Profile
router.get('/:username', function(req, res, next) {
    var username = req.params.username;
    cloudant.getUser(username, function(err, data) {
        console.log(data);
        if (err) {
            res.render('failure', { 'message': 'Unknown username ' + username });
        } else {
            res.render('users/profile', { 'user': data });
        }
    });
});

module.exports = router;
