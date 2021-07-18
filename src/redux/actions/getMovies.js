import {types} from '../constans/Types';
const getMovies = (data) => async (dispatch) => {
  dispatch({
    type: types.GET_MOVIES,
    payload: data,
  });
};

export default getMovies;
