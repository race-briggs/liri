//require dependencies
require('dotenv').config();

var keys = require('./keys.js');
var Spotify = require("node-spotify-api");
var axios = require('axios');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);


function liriHelp(action){
  console.log('Hello silly human, LIRI is here to help you with your mundane mortal problems.')
  switch(action){
    case 'movie-this':

      break;
    case 'spotify-this-song':
      var queryString = process.argv[3];

      spotify.search({ type: 'track', query: queryString, limit: 1}, function(err, data){
        if(err){
          return console.log(err)
        }

        console.log(JSON.stringify(data, null, 2));
      })
      break;
    case 'concert-this':

      break;
    case 'do-what-it-says':

      break;
  }

}

liriHelp(process.argv[2]);