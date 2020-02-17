import axios from 'axios';

export const mapPlaces = base => axios(`${base}/api/get-places`);
export const newPlace = place => axios.post('/api/new-place', place);
export const updatePlace = place => axios.post('/api/update-place', place);
