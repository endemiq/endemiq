import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const IndexPage = ({ places }) => (
  <>
    <div
      style={{
        position: 'absolute',
        zIndex: 9999,
        top: 0,
        left: '50%',
        background: 'gray',
        padding: 10,
      }}
    >
      <Link href="/">
        <a>Map</a>
      </Link>
    </div>
    <ul>
      {places.geojson.features.map(place => (
        <li key={place.properties.slug}>
          <Link href="/place/[slug]" as={`/place/${place.properties.slug}`}>
            <a>{place.properties.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
