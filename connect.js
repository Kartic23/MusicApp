const request = require('request');



var client_id = 'd38ac1b15aeb4255a6560249edcbe612';
var client_secret = '97224b7af80a4ab3b89ae3ec845b4b4f';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    console.log(token); // Print the access token

  }
});
