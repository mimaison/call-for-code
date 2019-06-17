const config = require('../config.json');

module.exports = {

    getCloudantUrl: function() {
        return process.env.CLOUDANT_URL || config.cloudantUrl;
    },

    getCloudantApiKey: function() {
        return process.env.CLOUDANT_APIKEY || config.cloudantApiKey;
    },

    getCloudantDb: function() {
        return process.env.CLOUDANT_DB || config.cloudantDb;
    },

    getKafkaBrokers: function() {
        return process.env.KAFKA_BROKERS || config.kafkaBrokers;
    },

    getCertsPath: function() {
        return process.env.CERTS_PATH || config.certsPath;
    },

    getKafkaApiKey: function() {
        return process.env.KAFKA_APIKEY || config.kafkaApiKey;
    },

    getDisasterTopicName: function() {
        return process.env.KAFKA_DISASTER_TOPIC || config.kafkaDisasterTopic;
    }
}
