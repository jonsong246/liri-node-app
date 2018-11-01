require("dotenv").config();
var request = require('request')
var moment = require('moment')
var Spotify = require('node-spotify-api');

const keys = require('./keys');
let spotify = new Spotify(keys.spotify);
 
// if(process.argv[2]){
// } 
var text = process.argv[2];

let space = "\n";
let songName = process.argv[3];

if(text === "spotify-this-song"){
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;  
        }
        else{
            output = space + "================= DATA HERE ==================" + 
            space + "Song Name: " + "'" +songName.toUpperCase()+ "'" +
            space + "Album Name: " + data.tracks.items[0].album.name +
            space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +  
            space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
            console.log(output);    
            }
    });
}
    function omdb(movie){
        if(movie == "")
        movie = "Mr.Nobody"
    }
if(text === 'movie-this'){
    console.log("ping")
    request("http://www.omdbapi.com/?t=" + songName + "&y=&plot=short&apikey=9affcfb7", function(error, response, body){
        if(!error && response.statusCode === 200){
            let result = JSON.parse(body)
            console.log(result)
            console.log('Title: ' + result.Title)
            console.log('Year:' + result.Year)
            console.log('IMDB Rating: ' + result.imdbRating)
            //console.log('Rotten Tomatoes Rating: ' + result.Ratings[1].Value)
            console.log('Country: ' + result.Country)
            console.log('Language: ' + result.Language)
            console.log('Plot: ' + result.Plot)
            console.log('Actors: ' + result.Actors)
            }
        })
    }


if(text === 'concert-this'){
    console.log("pong")
    request("https://rest.bandsintown.com/artists/" + songName + "/events?app_id=codingbootcamp", function(error, response, body){
        if(!error && response.statusCode === 200){
            let result = JSON.parse(body)
            
            console.log(result[0].lineup[0])
            result.forEach(element => {
                console.log(`
                Venue: ${element.venue.name}
                City: ${element.venue.city}
                Date: ${moment(element.datetime).format('MM/DD/YYYY')}`)
            })
            
            }
        })
    }
