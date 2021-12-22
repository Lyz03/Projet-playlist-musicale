let songs = [
    ["titre", "https://www.youtube.com/embed/U-A-W6ln7u0"],
    ["titre 2", "https://www.youtube.com/embed/7DPSsBrkeQw"]
]
/*
let test = new Playlist("titrePlaylist",songs,
    document.querySelector("#playlist_section h2"), document.querySelector('#playlist_section'),
    document.querySelector('iframe'));

test.printSongs()

 */
// playlist
const playlistName = document.querySelector('#playlist_name');
const playlistH2 = document.querySelector("#playlist_section h2");
const playlistContainer = document.querySelector('#playlist_section')
const videoPlayer = document.querySelector('iframe');

// songs
const songsTitle = document.querySelector('#song_title');
const songsUrl = document.querySelector('#song_url');

document.querySelector('#playlist input[type=submit]').addEventListener("click", function () {
    let playlist = new Playlist(playlistName.value, playlistH2, playlistContainer, videoPlayer);

    playlist.printPlaylist()

})