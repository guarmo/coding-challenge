// Import types
import { GET_DATA, SET_LOADING } from "../actions/types";

// Create initial state
const initialState = {
  geoJson: null,
  loading: false,
};

export default function data(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        geoJson: payload,
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
