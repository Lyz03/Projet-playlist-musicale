const Playlist = function (title, h2, container, videoPlayer) {
    this.title = title;
    this.h2 = h2;
    this.container = container;
    this.videoPlayer = videoPlayer;

    // show the playlist name and songs
    this.printPlaylist = function () {
        this.h2.innerText = this.title;
        this.container.appendChild(this.h2)
    }

    this.printSongs = function (inputTitle, inputSRC) {
        let span = document.createElement('span');
    }
}