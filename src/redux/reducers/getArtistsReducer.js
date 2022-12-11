import { GET_ARTIST } from "../actions/action";

const initialState = {
  artistList: [],
};

const getArtistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artistList: action.payload,
      };
    default:
      return state;
  }
};

export default getArtistsReducer;
