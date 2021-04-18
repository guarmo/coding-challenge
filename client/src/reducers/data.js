import {
  GET_DATA,
  SET_LOADING,
  CLEAR_DATA,
  SET_ERROR,
  CLEAR_ERROR,
} from "../actions/types";

const initialState = {
  loading: false,
  geoJson: null,
  center: null,
  error: null,
};

export default function data(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        center: [
          (payload.coords[1] + payload.coords[4]) / 2,
          (payload.coords[0] + payload.coords[3]) / 2,
        ],
        geoJson: payload.geoJson,
      };
    case CLEAR_DATA:
      return {
        ...state,
        geoJson: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
