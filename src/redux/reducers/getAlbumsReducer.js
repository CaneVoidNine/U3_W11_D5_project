import { GET_ALBUM } from "../actions/action";

const initialState = {
  albumList: [],
};

const getAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        albumList: action.payload,
      };
    default:
      return state;
  }
};

export default getAlbumsReducer;
