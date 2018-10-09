require("dotenv").config();

var Spotify = require('node-spotify-api');

const keys = require('./keys');
let spotify = new Spotify(keys.spotify);
 
if(process.argv[2]){
    var text = process.argv[2];
} 

let space = "\n";
let songName = process.argv[3];

if(text === "spotify-this-song" || text === undefined)
  params = songName;
    spotify.search({ type: 'track', query: params }, function(err, data) {
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