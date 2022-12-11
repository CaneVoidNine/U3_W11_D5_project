import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getAlbumsReducer from "../reducers/getAlbumsReducer";

const mainReducer = combineReducers({
  getAlbums: getAlbumsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
