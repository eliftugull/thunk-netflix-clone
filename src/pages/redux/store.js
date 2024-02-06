import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer"

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
