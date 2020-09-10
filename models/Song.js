class Song {
  constructor(id, genre, title, artist, artwork, url) { //to provide a blueprint for how our songs will look like, what all it will contain
    this.id = id;
    this.genre = genre;
    this.title = title;
    this.artist = artist;
    this.artwork = artwork;
    this.url = url;
  }
}

export default Song;