var request = require('request');
var cloudant = require('./cloudant');

const handleDisaster = (message) => {
    var event = JSON.parse(message.value.toString());
    console.log('handling disaster ' + event);

    cloudant.findByCountry(event.location.country, function(err, data) {
        console.log(data.docs);
        if (err) {
            console.log(err);
            return {};
        } else {
            for (var i = 0; i < data.docs.length; i++) {
                var user = data.docs[i];
                updateUserTodos({
                    'user': user,
                    'event': event
                });
            }
        }
    });
}

const updateUserTodos = (userDetails) => {
    request.post('http://localhost:3000/mocks/todo', {
        'json': userDetails
    },
    function(err, response, body) {
        if (err) {
            console.log(err);
        }
        console.log("Get response: " + response.body);
        cloudant.addDisasterToUser(userDetails.user.username, response.body, function(err, data) {
            console.log(data.docs);
        });
    });
}

module.exports = {
    handleDisaster
}