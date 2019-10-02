# liri
## Your own personal assistant
----------------------------------------------------------------------------------------------------------------------------------------

# Introduction

Liri is a personal assistant that was created to make looking up various types of media easily done in a single location. Instead of browsing around the web to three separate websites, one can simply pass a command to liri in order to search information about a song, movie, or even an artist's upcoming concert.

----------------------------------------------------------------------------------------------------------------------------------------

# Overview & Instructions

The app is organized into 4 different commands in a single js file (liri.js), all of which exist as cases in a switch statement.

To use the app, simply follow these steps:

1. In the command line, cd into the folder containing liri.
1. Once in the folder, you can now issue one of the following commands directly in the command line:
  1. node liri.js concert-this <artist name>
  1. node liri.js spotify-this-song <song name>
  1. node liri.js movie-this <movie title>
  1. node liri.js do-what-it-says
1. Make sure your spelling is correct, and if using spaces in a title, make sure your title or name you want to search is in quotes.
1. Liri will then connect to an API according to your command and return a set of information.
  
### concert-this

![concert-this example](/assets/screenshots/concert-this.png)

The concert-this command will have liri connect to the Bandisintown.com API in order to find an upcoming show by an artist of your choosing. The results displayed will contain the name of the band searched, the name of the venue, the location of the venue, and the date of the concert. If there are no upcoming shows, liri will notify you.

### spotify-this-song

![spotify-this-song example](/assets/screenshots/spotify-this.png)

This command will cause liri to connect with the Spotify API and search for information about the song requested. Liri will return information about the first search result, and provide the artist name, album title, song title, and a link to a preview of the song. If left blank, liri will return information about The Sign by Ace of Base.

### movie-this

![movie-this example](/assets/screenshots/movie-this.png)

![movie-this example](/assets/screenshots/movie-this-search.png)

This command will send liri to connect to the OMDB API and search for information about the provided movie title. Liri will return the title of the movie, its release year, its IMDB rating, its Rotten Tomatoes rating, where it was produced, its language, a short plot summary, and the starring actors. If the query is blank, it will give information on Mr. Nobody.

### do-what-it-says

![do-what-it-says example](/assets/screenshots/do-what-it-says.png)

This command will have liri read the random.txt file and run the command stored inside. Change the command and the query to be whatever you like! Just be sure to separate the two with a comma and have the query in quotes. Play around with it!

----------------------------------------------------------------------------------------------------------------------------------------

# Technologies

* Node.JS
* Axios
* NPM
* node-spotify-api
* OMDB api
* Bandsintown api

----------------------------------------------------------------------------------------------------------------------------------------

All features of this app was developed my Race Briggs with the help of the various technologies and APIs listed above.
