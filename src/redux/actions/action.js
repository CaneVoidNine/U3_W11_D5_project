export const GET_ARTIST = "ADD_ARTIST";
export const GET_ALBUM = "ADD_ALBUM";
export const SAVE_VALUE = "SAVE_VALUE";
export const fetchAlbums = (endpoint) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=pantera";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_ALBUM,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchArtists = (endpoint) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_ARTIST,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
