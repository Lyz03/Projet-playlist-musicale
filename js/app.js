const videoPlayer = document.querySelector('iframe');
const playlistSelection = document.querySelector('#selection');
const songSection = document.querySelector('#song_section')

// playlist
const playlistName = document.querySelector('#playlist_name');
const playlistSelect = document.querySelector("#playlist_select");
const playlistSection = document.querySelector('#playlist_section');
const playlistGenre = document.querySelector('#playlist_genre');

// songs
const songsTitle = document.querySelector('#song_title');
const songsUrl = document.querySelector('#song_url');

// new playlist
document.querySelector('#playlist input[type=submit]').addEventListener("click", function () {
    let playlist = new Playlist(playlistName.value, playlistSelect, playlistSection, playlistGenre.value);
    playlist.printPlaylist()
})

// new song
document.querySelector("#song_section input[type=submit]").addEventListener("click", function () {
    let container = document.getElementById(playlistSelect.value);
    let song = new Song(songsTitle.value, songsUrl.value, container, videoPlayer);
    song.printSongs();
})

// show info
let a = 1
document.querySelector('body > button').addEventListener("click", function () {
    if (a % 2 === 1) {
        playlistSelection.style.display = "block";
        songSection.style.display = "block";
    } else {
        playlistSelection.style.display = "none";
        songSection.style.display = "none";
    }

    a++
})