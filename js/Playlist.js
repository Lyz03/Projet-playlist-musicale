const Playlist = function (title, select, section, genre) {
    this.title = title;
    this.section = section;
    this.select = select;
    this.genre = genre;

    // show the playlist name and add an option to the select
    this.printPlaylist = function () {
        let container = document.createElement('div');
        container.id = this.title;
        this.section.appendChild(container);

        let h2 = document.createElement('h2');
        h2.innerText = this.title;
        container.appendChild(h2);

        let p = document.createElement('p');
        p.innerText = this.genre;
        container.appendChild(p);

        let option = document.createElement('option');
        option.value = this.title;
        option.innerText = this.title;
        this.select.appendChild(option);
    }
}