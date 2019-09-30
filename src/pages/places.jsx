import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout } from 'components';

const IndexPage = ({ places }) => (
  <Layout>
    <ul>
      {places.geojson.features.map(place => (
        <li key={place.properties.slug}>
          <Link href="/place/[slug]" as={`/place/${place.properties.slug}`}>
            <a>{place.properties.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
