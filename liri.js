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

      spotify.search({ type: 'track', query: queryString || 'Ace of Base', limit: 1}, function(err, data){
        if(err){
          return console.log(err);
        }

        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].preview_url);
        
      })
      break;
    case 'concert-this':

      break;
    case 'do-what-it-says':

      break;
  }

}

liriHelp(process.argv[2]);