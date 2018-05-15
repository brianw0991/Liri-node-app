
// var spotify = new Spotify(keys.spotify);
// var client = new twitter(keys.exports.twitter);


var fs = require("fs");
var keys = require("./keys")
var Twitter = require(exports.twitter)
//global variables for spotify and OMDB will be delcared here 

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})



var numTweets = {count: 20};

function displayTweets(){
    client.get("statuses/user_timeline", numTweets, function(error, tweets, response){
        if(!error){
            for (var i = 0; i < tweets.length; i++){
                console.log(tweets[i].text + " tweeted on "+ tweets[i].created_at)
            }

            } else {
                console.log(error);
            };
    });
};

//function displaySong 
    //if statement to differentiate between errors in response and good response
        //response will be console logged to display in terminal

        //else error message will display

//function displayMovie
    //if statement to differentiate between errors again 
        //good response will console.log response

        //error will console.log error

        



