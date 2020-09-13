import Song from '../models/Song';
import Genre from '../models/Genre';

export const GENRES = [
  new Genre(
    '1',
    'Romantic',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600018632/betla_z4m9cl.jpg',
  ), //dummy colors, will add image later
  new Genre(
    '2',
    'Soothing',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    '3',
    'Rock-on',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    '4',
    'Classical',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    '5',
    'Workout',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    '6',
    'Dance',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
];

export const SONGS = [
  new Song(
    '0',
    '1',
    'Death Bed',
    'Powfu',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600018774/song2_bxpoj6.mp3',
  ),
  new Song(
    '1',
    '1',
    'Bad Liar',
    'Imagine Dragons',
    'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    'https://samplesongs.netlify.app/Bad%20Liar.mp3',
  ),
  new Song(
    '2',
    '1',
    'Faded',
    'Alan Walker',
    'https://samplesongs.netlify.app/album-arts/faded.jpg',
    'https://samplesongs.netlify.app/Faded.mp3',
  ),
  new Song(
    '3',
    '1',
    'Hate Me',
    'Ellie Goulding',
    'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    'https://samplesongs.netlify.app/Hate%20Me.mp3',
  ),
  new Song(
    '4',
    '1',
    'Solo',
    'Clean Bandit',
    'https://samplesongs.netlify.app/album-arts/solo.jpg',
    'https://samplesongs.netlify.app/Solo.mp3',
  ),
  new Song(
    '5',
    '2',
    'Without Me',
    'Halsey',
    'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    'https://samplesongs.netlify.app/Without%20Me.mp3',
  ),
];

/* export const SONGS2 = [
  new Song(
    '0',
    '2',
    'Without Me',
    'Halsey',
    'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    'https://samplesongs.netlify.app/Without%20Me.mp3',
  ),
]; */
