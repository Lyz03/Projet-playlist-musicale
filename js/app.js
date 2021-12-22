let songs = [
    ["titre", "https://www.youtube.com/embed/U-A-W6ln7u0"],
    ["titre 2", "https://www.youtube.com/embed/7DPSsBrkeQw"]
]

const videoPlayer = document.querySelector('iframe');

// playlist
const playlistName = document.querySelector('#playlist_name');
const playlistSelect = document.querySelector("#playlist_select");
const playlistSection = document.querySelector('#playlist_section');

// songs
const songsTitle = document.querySelector('#song_title');
const songsUrl = document.querySelector('#song_url');

// new playlist
document.querySelector('#playlist input[type=submit]').addEventListener("click", function () {
    let playlist = new Playlist(playlistName.value, playlistSelect, playlistSection);
    playlist.printPlaylist()
})

// new song
document.querySelector("#song_section input[type=submit]").addEventListener("click", function () {
    let container = document.getElementById(playlistSelect.value);
    console.log(container)
    let song = new Song(songsTitle.value, songsUrl.value, container, videoPlayer);
    song.printSongs();
})