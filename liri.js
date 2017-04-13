var Twitter = require('twitter');
var tKeys = require('./keys.js');
// console.log(tKeys.twitterKeys.consumer_key);
var client = new Twitter({
  consumer_key: tKeys.twitterKeys.consumer_key,
  consumer_secret: tKeys.twitterKeys.consumer_secret,
  access_token_key: tKeys.twitterKeys.access_token_key,
  access_token_secret: tKeys.twitterKeys.access_token_secret
});
var params = {screen_name: '@henriquezhustle',
              count: 20
                };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   
    for (i = 0; i < params.count; i++) { 
     console.log(tweets[i].text);
}
  }
});

