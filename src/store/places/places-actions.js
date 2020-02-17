import { fetchPlaces } from 'services/api';

export const SET_PLACES = 'SET_PLACES';
export const SET_PLACES_GEOJSON = 'SET_PLACES_GEOJSON';
export const SET_PLACES_LOADING = 'SET_PLACES_LOADING';
export const SET_PLACES_ERROR = 'SET_PLACES_ERROR';

export const setGeojson = places => ({
  type: SET_PLACES_GEOJSON,
  payload: {
    type: 'FeatureCollection',
    features: places.map(place => ({
      type: 'Feature',
      properties: {
        slug: place.slug,
        ...place.revisions[0],
      },
      geometry: {
        type: 'Point',
        coordinates: [place.geolocation.longitude, place.geolocation.latitude],
      },
    })),
  },
});

export const getPlaces = domain => dispatch =>
  fetchPlaces(domain)
    .then(({ data }) => {
      dispatch({ type: SET_PLACES, payload: data.places });
      dispatch(setGeojson(data.places));
    })
    .catch(err => dispatch({ type: SET_PLACES_ERROR, payload: err }));

export const setLoading = () => ({
  type: SET_PLACES_LOADING,
});

export default {
  SET_PLACES,
  SET_PLACES_LOADING,
  SET_PLACES_ERROR,
  setLoading,
  getPlaces,
};
