import { GET_DATA, CLEAR_DATA, SET_LOADING } from "./types";
import axios from "axios";

// Get Data
export const getData = (coords) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/data/${coords}`);

    dispatch({
      type: GET_DATA,
      payload: {
        geoJson: res.data,
        center: [(coords[1] + coords[4]) / 2, (coords[0] + coords[3]) / 2],
      },
    });
  } catch (err) {
    console.error(err);
  }
};

// Clear Data
export const clearData = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_DATA,
    });
  } catch (err) {
    console.error(err);
  }
};

// Set Loading
export const setLoading = (bool) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: bool,
    });
  } catch (err) {
    console.error(err);
  }
};
