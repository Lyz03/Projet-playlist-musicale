const Song = function (inputTitle, inputSRC, container, videoPlayer) {
    this.title = inputTitle;
    this.src = inputSRC;
    this.container = container
    this.videoPlayer = videoPlayer;

    // show the song and add a click event to play the video
    this.printSongs = function () {
        let span = document.createElement('span');
        span.innerText = this.title;
        span.setAttribute('data-url', this.src);
        this.container.appendChild(span);

        span.addEventListener("click", () => {
            this.videoPlayer.setAttribute('src', this.src)
        })
    }
}