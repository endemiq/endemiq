import axios from 'axios';

export const newPlace = place => axios.post('/api/new-place', place);