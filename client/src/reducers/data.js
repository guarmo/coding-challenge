// Import types
import { GET_DATA } from "../actions/types";

// Create initial state
const initialState = {
  geoJson: null,
};

export default function data(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        geoJson: payload,
      };
    default:
      return state;
  }
}
