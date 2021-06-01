export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toggleFavourite = (id, gid) => {
  return {type: TOGGLE_FAVOURITE, songId: id, genreId: gid};
};
