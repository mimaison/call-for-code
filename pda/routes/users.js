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
    var pets = req.body.pets;
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
            'pets': pets,
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
router.get('/:username/todo/', function(req, res, next) {
    var username = req.params.username;
    var date = new Date();
    res.redirect('/users/' + username + '/todo/' + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate());
});

router.get('/:username/todo/:year/:month/:day', function(req, res, next) {
    var username = req.params.username;
    var year = req.params.year;
    var month = req.params.month;
    var day = req.params.day;
    var date = new Date(year, month-1, day, 0, 0, 0, 0);
    cloudant.getUser(username, function(err, data) {
        if (err) {
            res.render('failure', { 'message': 'Unknown username ' + username });
        } else {
            if (data.todos !== undefined) {
                var start = Date.parse(data.todos.disaster.start);
                var end = Date.parse(data.todos.disaster.end);
                if (date < start) {
                    res.render('users/prepare', { 'disaster': data.todos.disaster, 'todos': data.todos.before, 'now': date });
                } else if (date < end) {
                    res.render('users/survive', { 'disaster': data.todos.disaster, 'todos': data.todos.during, 'now': date });
                } else {
                    res.render('users/rebuild', { 'todos': data.todos.after });
                }
            } else {
                res.render('users/nodisaster');
            }
        }
    });
});

// Profile
router.get('/:username', function(req, res, next) {
    var username = req.params.username;
    cloudant.getUser(username, function(err, data) {
        if (err) {
            res.render('failure', { 'message': 'Unknown username ' + username });
        } else {
            res.render('users/profile', { 'user': data });
        }
    });
});

module.exports = router;
