import { combineReducers } from "redux";

import MoviesReducer from "./MoviesReducer";
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  Movies: MoviesReducer,
  userInfo : AuthReducer,
});

export default rootReducer;
