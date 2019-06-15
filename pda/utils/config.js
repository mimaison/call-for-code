const config = require('../config.json');

module.exports = {

    getCloudantUrl: function() {
        return process.env.CLOUDANT_URL ||  config.cloudantUrl;
    },

    getCloudantApiKey: function() {
        return process.env.CLOUDANT_APIKEY ||  config.cloudantApiKey;
    },

    getCloudantDb: function() {
        return process.env.CLOUDANT_DB ||  config.cloudantDb;
    }
}
