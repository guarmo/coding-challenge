import { GET_DATA, SET_LOADING, CLEAR_DATA } from "../actions/types";

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
        center: payload.center,
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
    default:
      return state;
  }
}
