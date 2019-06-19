var config = require('../utils/config.js')
var Cloudant = require('@cloudant/cloudant');
var cloudant = new Cloudant({ url: config.getCloudantUrl(), plugins: { iamauth: { iamApiKey: config.getCloudantApiKey() } } });

module.exports = {

    registerUser: function(user, callback) {
        db = cloudant.db.use(config.getCloudantDb());
        db.insert(user, function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            callback(err, data);
        });
    },

    getUser: function(username, callback) {
        db = cloudant.db.use(config.getCloudantDb());
        db.get(username, function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            callback(err, data);
        });
    },

    findByCountry: function(country, callback) {
        var query = {
            "selector": {
              "country" : country 
            }
        };
        db = cloudant.db.use(config.getCloudantDb());
        db.find(query, function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            callback(err, data);
        });
    },

    addDisasterToUser: function(username, todos, callback) {
        console.log('updating entry for ' + username + ' with ' + todos);
        db = cloudant.db.use(config.getCloudantDb());
        db.get(username, function(err, data) {
            console.log('retrieved ' + data);
            console.log(data);
            var doc = data;
            doc.todos = todos;
            db.insert(doc, function(err, data) {
                console.log('Error:', err);
                console.log('Data:', data);
                callback(err, data);
            });
        });
    }
}