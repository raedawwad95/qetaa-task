import {ADD_MOVIES} from "../constants/action-types"
export const addMovies = movies => ({
  type: ADD_MOVIES,
  payload: movies
});
