import { GET_DATA, SET_LOADING } from "../actions/types";
import calculateCenter from "../utils/calculateCenter";

const initialState = {
  loading: false,
  geoJson: null,
  center: null,
};

export default function data(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        center: calculateCenter(payload.coords),
        geoJson: payload.geoJson,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
