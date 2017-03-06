var credentials = require('./credentials');
var client = new Twitter(credentials);

var query = "from:awscloud min_faves:50";

client.get('search/tweets', {q: "node.js"}, function(err, tweets, response) { 
	 if (err || !tweet.statuses) { 
		console.log(err); 
	} else { 
		tweets.statuses.forEach(function(tweet) { 
			console.log(tweet.user.screen_name + " " + tweet.text); 
		}); 
	} 
});
