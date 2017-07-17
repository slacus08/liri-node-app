
var keys = require('./keys.js');
// Need this variable to hold the file keys.js
// Use current folder .
var Twitter = require('twitter');

var client = new Twitter(keys.twitterKeys);


var params = {screen_name: 'sashballs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
