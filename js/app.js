let songs = [
    ["titre", "https://www.youtube.com/embed/U-A-W6ln7u0"],
    ["titre 2", "https://www.youtube.com/embed/7DPSsBrkeQw"]
]

// playlist
const playlistName = document.querySelector('#playlist_name');
const videoPlayer = document.querySelector('iframe');
const playlistSelect = document.querySelector("#playlist_select");
const playlistSection = document.querySelector('#playlist_section');

// songs
const songsTitle = document.querySelector('#song_title');
const songsUrl = document.querySelector('#song_url');

document.querySelector('#playlist input[type=submit]').addEventListener("click", function () {
    let playlist = new Playlist(playlistName.value, videoPlayer, playlistSelect, playlistSection);
    playlist.printPlaylist()
})