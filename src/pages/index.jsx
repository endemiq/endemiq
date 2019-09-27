import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Map from 'components/Map';

const IndexPage = ({ places }) => {
  const [mapOpened, setMapOpened] = useState(true);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: 9999,
          bottom: 0,
          left: '50%',
          background: 'gray',
        }}
      >
        {/* eslint-disable-next-line */}
        <input
          type="checkbox"
          onChange={() => setMapOpened(!mapOpened)}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </div>
      {mapOpened && <Map places={places} />}
      {!mapOpened && (
        <ul>
          {places.geojson.features.map(place => (
            <li key={place.properties.slug}>
              <Link href={`/place/${place.properties.slug}`}>
                <a>{place.properties.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
