import { GET_DATA } from "./types";
import axios from "axios";

// Action
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
