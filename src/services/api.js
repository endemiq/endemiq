import axios from 'axios';

export const newPlace = place => axios.post('/api/new-place', place);
export const updatePlace = place => axios.post('/api/update-place', place);
