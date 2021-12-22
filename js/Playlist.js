const Playlist = function (title, select, section) {
    this.title = title;
    this.section = section
    this.select = select

    // show the playlist name and add an option to the select
    this.printPlaylist = function () {
        let container = document.createElement('div');
        container.id = this.title;
        this.section.appendChild(container);

        let h2 = document.createElement('h2');
        h2.innerText = this.title;
        container.appendChild(h2);

        let option = document.createElement('option');
        option.value = this.title;
        option.innerText = this.title;
        this.select.appendChild(option);
    }
}