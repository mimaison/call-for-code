var config = require('../utils/config.js')
var kafka = require('node-rdkafka');

const connectTimeoutMs = 10000;

const getProducerConfig = () => {
    var producerConfig = {
        'metadata.broker.list': config.getKafkaBrokers(),
        'security.protocol': 'sasl_ssl',
        'ssl.ca.location': config.getCertsPath(),
        'sasl.mechanisms': 'PLAIN',
        'sasl.username': 'token',
        'sasl.password': config.getKafkaApiKey(),
        'broker.version.fallback': '0.10.2.1',
        'log.connection.close' : false,
        'dr_msg_cb': true
    };
    console.log('producer configs' + JSON.stringify(producerConfig));
    return producerConfig;
}

var producer = new kafka.Producer(getProducerConfig(), {
    'request.required.acks': -1,
    'produce.offset.report': true,
});
producer.setPollInterval(1000);
var producerReady = false;
producer.connect({ timeout: connectTimeoutMs }, function(err, info) {
    if (err) {
        console.error('Error in producer connect cb', err);
        process.exit(-99);
    } else {
        console.log('Producer connected to Kafka');
        producerReady = true;
    }
});
producer.on('delivery-report', (err, report) => {
    if (typeof report.opaque === 'function') {
        report.opaque.call(null, err, report);
    } else {
        console.error('Assertion failed: opaque not a function!' + err);
    }
});

const emit = (key, event) => {
    if (!producerReady) {
        // kafka will handle reconnections but the produce method should never 
        // be called if the client was never 'ready'
        console.log('Producer never connected to Kafka yet');
        return Promise.reject(new Error('Producer never connected to Kafka yet'));
    }

    return new Promise((resolve, reject) => {
        try {
            producer.produce(config.getDisasterTopicName(), 
                null, /* partition */
                new Buffer(JSON.stringify(event)),
                key,
                Date.now(),
                (err, report) => {
                    if (err) return reject(err);
                    return resolve(report);
                }
            );
        } catch (e) {
            console.error('Failed sending event ' + JSON.stringify(event) + " error:" + e);
            return reject(e);
        }
    });
}

module.exports = {
    emit
}