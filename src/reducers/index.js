import {ADD_MOVIES} from "../constants/action-types"

const initialState = {
  movies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      state.movies =[]
      return { ...state, movies: state.movies.concat(action.payload) };
    default:
      return state;
  }
};
export default rootReducer;
