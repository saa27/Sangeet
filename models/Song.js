class Song {
  constructor(id, genreId, title, artist, poster, songUrl) { //to provide a blueprint for how our songs will look like, what all it will contain
    this.id = id;
    this.genreId = genreId;
    this.title = title;
    this.artist = artist;
    this.poster = poster;
    this.songUrl = songUrl;
  }
}

export default Song;