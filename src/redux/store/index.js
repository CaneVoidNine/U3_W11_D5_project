import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getAlbumsReducer from "../reducers/getAlbumsReducer";
import getArtistsReducer from "../reducers/getArtistsReducer";
const mainReducer = combineReducers({
  getAlbums: getAlbumsReducer,
  getArtists: getArtistsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
