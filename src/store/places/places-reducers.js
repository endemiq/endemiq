import {
  SET_PLACES,
  SET_PLACES_GEOJSON,
  SET_PLACES_LOADING,
  SET_PLACES_ERROR,
} from './places-actions';
import initialState from './places-initial-state';

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        collection: action.payload.reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        }, {}),
        loading: false,
      };

    case SET_PLACES_GEOJSON:
      return {
        ...state,
        geojson: action.payload,
      };

    case SET_PLACES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_PLACES_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
