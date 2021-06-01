import {
  CLASSICS,
  DANCE,
  ROCKON,
  ROM,
  SONGS,
  SOOTHING,
  WORKOUT,
} from '../../components/data';
import {TOGGLE_FAVOURITE} from '../actions/songsActions';

const initialState = {
  songs: [ROM, SOOTHING, ROCKON, CLASSICS, WORKOUT, DANCE, SONGS],
  favSongs: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingFav = state.favSongs.findIndex(
        (song) => song.id === action.songId,
      );
      if (existingFav >= 0) {
        const updatedFavSongs = [...state.favSongs];//since we don't want to make any changes in the original array favSongs
        updatedFavSongs.splice(existingFav, 1);//only remove the song which was already in the favSongs
        return {...state, favSongs: updatedFavSongs};
      } else {
        if (action.genreId === '1') {
          const song = state.songs[0].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '2') {
          const song = state.songs[1].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '3') {
          const song = state.songs[2].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '4') {
          const song = state.songs[3].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '5') {
          const song = state.songs[4].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '6') {
          const song = state.songs[5].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '7') {
          const song = state.songs[6].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        }
      }

    default:
      return state;
  }
};

export default songsReducer;
