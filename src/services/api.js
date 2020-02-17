import axios from 'axios';

export const fetchPlaces = base => axios(`${base}/api/get-places`);
export const fetchPlace = (slug, base) =>
  axios.post(`${base}/api/get-place`, { slug });
export const newPlace = place => axios.post('/api/new-place', place);
export const updatePlace = place => axios.post('/api/update-place', place);
