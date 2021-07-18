import {types} from '../constans/Types'
const initState = {
  Movies: "",
};

const MoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        Movies: action.payload,
      };

    default:
      return state;
  }
};

export default MoviesReducer;
