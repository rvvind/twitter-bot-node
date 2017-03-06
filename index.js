var Twitter = require('twitter');
var credentials = require('./credentials');
var client = new Twitter(credentials);

var query = "from:awscloud min_faves:50";

function searchAndTweet(succeed, fail) {
        console.log("search and tweet");
        client.get('search/tweets', {q: query, count: 15}, function(err, tweets, response) {
                if (!tweets.statuses) {
                        console.log(err);
                }
		tweets.statuses.forEach(function(tweet) {
 			var tweetId = tweet.id_str;
			client.post('statuses/retweet/' + tweetId, function(err, tweet, id) {
				// Will return an error if we try to retweet a tweet that we've already
          			// retweeted.
          			console.log(err || tweet.text);
        		});
    		});
    		succeed("success");
	});
}

exports.handler = function(event,context) {
  searchAndTweet(context.succeed, context.fail);
};
