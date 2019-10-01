//require dependencies
require('dotenv').config();

var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'a30d6bb0045c4ed38ff92f0f94b0cb6d',
  secret: '05df9fa33bbd4a00a262b8bce66c9193'
})

function liriHelp(action){
  console.log('Hello silly human, LIRI is here to help you with your mundane mortal problems.')
  switch(action){
    case 'find-movie':

      break;
    case 'find-song':
      var searchType = process.argv[3];
      var queryString = process.argv[4];

      spotify.search({type: searchType, query: queryString, limit: 5}, function(err, data){
        if(err){
          return console.log(err)
        }

        console.log(JSON.stringify(data, null, 2));
      })
      break;
    case 'find-concert':

      break;
  }

}

liriHelp(process.argv[2]);