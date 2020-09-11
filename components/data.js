import Song from '../models/Song';
import Genre from '../models/Genre';

export const GENRES = [
  new Genre(
    'g1',
    'Romantic',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ), //dummy colors, will add image later
  new Genre(
    'g2',
    'Soothing',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    'g3',
    'Rock-on',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    'g4',
    'Classical',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    'g5',
    'Workout',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
  new Genre(
    'g6',
    'Dance',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  ),
];

export const SONGS = [
  new Song(
    '0',
    'g1',
    'Death Bed',
    'Powfu',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    require('./song.mpeg'),
  ),
  new Song(
    '1',
    'g1',
    'Bad Liar',
    'Imagine Dragons',
    'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    'https://samplesongs.netlify.app/Bad%20Liar.mp3',
  ),
  new Song(
    '2',
    'g1',
    'Faded',
    'Alan Walker',
    'https://samplesongs.netlify.app/album-arts/faded.jpg',
    'https://samplesongs.netlify.app/Faded.mp3',
  ),
  new Song(
    '3',
    'g1',
    'Hate Me',
    'Ellie Goulding',
    'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    'https://samplesongs.netlify.app/Hate%20Me.mp3',
  ),
  new Song(
    '4',
    'g1',
    'Solo',
    'Clean Bandit',
    'https://samplesongs.netlify.app/album-arts/solo.jpg',
    'https://samplesongs.netlify.app/Solo.mp3',
  ),
  new Song(
    '5',
    'g1',
    'Without Me',
    'Halsey',
    'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    'https://samplesongs.netlify.app/Without%20Me.mp3',
  ),
];
