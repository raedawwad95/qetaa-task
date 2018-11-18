import {ADD_MOVIES} from "../constants/action-types"

const initialState = {
  movies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      state.movies.push(action.payload);
      return state;
    default:
      return state;
  }
};
export default rootReducer;
