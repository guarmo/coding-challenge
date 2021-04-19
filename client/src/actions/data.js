import {
  GET_DATA,
  CLEAR_DATA,
  SET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from "./types";
import axios from "axios";

// Get Data
export const getData = (coords) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/data/${coords}`);

    dispatch({
      type: GET_DATA,
      payload: {
        geoJson: res.data,
        coords: coords,
      },
    });
  } catch (err) {
    console.error(`Action: ${err}`);
    dispatch({
      type: SET_ERROR,
      payload: err.message,
    });
  }
};

// Clear Data
export const clearData = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DATA,
  });
};

// Set Loading
export const setLoading = (bool) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: bool,
    });
  } catch (err) {
    console.error(`Action: ${err}`);
    dispatch({
      type: SET_ERROR,
      payload: err.message,
    });
  }
};

// Set Error
export const setError = () => async (dispatch) => {
  dispatch({
    type: SET_ERROR,
  });
};

// Clear Error
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
