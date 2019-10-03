//require dependencies
require('dotenv').config();

var keys = require('./keys.js');
var fs = require('fs');
var Spotify = require("node-spotify-api");
var axios = require('axios');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

console.log('Hello silly human, LIRI is here to help you with your mundane mortal problems.')

function liriHelp(action){
  var searchValue = process.argv.slice(3).join(" ") || undefined;
  switch(action){
    case 'movie-this':
      if(searchValue === undefined){
        axios.get("http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy").then(function(response){
          console.log(response.data.Title);
          console.log("Released in " + response.data.Year);
          console.log("IMDB Rating: " + response.data.Ratings[0].Value);
          console.log("Rotten Timatoes Rating: " + response.data.Ratings[1].Value);
          console.log("Produced in: " + response.data.Country);
          console.log("Spoken in: " + response.data.Language);
          console.log("Plot summary: " + response.data.Plot);
          console.log("Starring: " + response.data.Actors);
        })
      } else{
      axios.get("http://www.omdbapi.com/?t=" + searchValue + "&y=&plot=short&apikey=trilogy").then(function(response){
        console.log(response.data.Title);
        console.log("Released in " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Timatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Produced in: " + response.data.Country);
        console.log("Spoken in: " + response.data.Language);
        console.log("Plot summary: " + response.data.Plot);
        console.log("Starring: " + response.data.Actors);
      })
      }
      break;
    case 'spotify-this-song':
      spotify.search({ type: 'track', query: searchValue || 'The Sign Ace of Base', limit: 1}, function(err, data){
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
      axios.get("https://rest.bandsintown.com/artists/" + searchValue + "/events?app_id=codingbootcamp").then(function(response){
        if(response.data[0] === undefined){
          return console.log('Oops! No upcoming shows by that artist!');
        } else {
        var date = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log(response.data[0].lineup);
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city, response.data[0].venue.country);
        console.log(date);
        }
      })
      break;
    case 'do-what-it-says':
      fs.readFile('random.txt', 'utf8', function(err, data){
        if(err){
          return console.log(err);
        }
        var command = data.split(',');
        process.argv[2] = command[0];
        process.argv[3] = command[1];
        liriHelp(process.argv[2]);
      })
      break;
  }
}

liriHelp(process.argv[2]);