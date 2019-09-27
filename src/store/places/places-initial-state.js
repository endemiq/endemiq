const initialState = {
  loading: false,
  error: null,
  geojson: {
    type: 'FeatureCollection',
    features: [],
  },
  collection: [],
};

export default initialState;
