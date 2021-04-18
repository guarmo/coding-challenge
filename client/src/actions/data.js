import { GET_DATA, SET_LOADING } from "./types";
import axios from "axios";

// Get Data
export const getData = (coords) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/data`);

    dispatch({
      type: GET_DATA,
      payload: res.data,
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
