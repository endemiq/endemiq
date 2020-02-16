import React from 'react';
import PropTypes from 'prop-types';

export const MapContext = React.createContext({});

const MapProvider = ({ accessToken, children }) => (
  <MapContext.Provider value={{ accessToken }}>{children}</MapContext.Provider>
);

MapProvider.propTypes = {
  accessToken: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default MapProvider;
