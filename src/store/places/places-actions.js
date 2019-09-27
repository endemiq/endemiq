import { getFirebasePlaces, sanitize } from 'services/firebase';

export const SET_PLACES = 'SET_PLACES';
export const SET_PLACES_LOADING = 'SET_PLACES_LOADING';
export const SET_PLACES_ERROR = 'SET_PLACES_ERROR';

export const getPlaces = () => dispatch =>
  getFirebasePlaces()
    .then(querySnapshot => {
      const places = querySnapshot.docs.map(doc => sanitize(doc.data()));
      dispatch({ type: SET_PLACES, payload: places });
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
