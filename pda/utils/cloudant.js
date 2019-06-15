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
    }
}