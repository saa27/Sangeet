import {SONGS, SONGS2} from '../../components/data';
import {TOGGLE_FAVOURITE} from '../actions/songsActions';

const initialState = {
  songs: [SONGS, SONGS2],
  favSongs: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingFav = state.favSongs.findIndex(
        (song) => song.id === action.songId,
      );
      if (existingFav >= 0) {
        const updatedFavSongs = [...state.favSongs];
        updatedFavSongs.splice(existingFav, 1);
        return {...state, favSongs: updatedFavSongs};
      } else {
        if (action.genreId === '1') {
          const song = state.songs[0].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        } else if (action.genreId === '2') {
          const song = state.songs[1].find((s) => s.id === action.songId);
          return {...state, favSongs: state.favSongs.concat(song)};
        }
      }

    default:
      return state;
  }
};

export default songsReducer;
