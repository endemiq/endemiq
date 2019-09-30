import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout, Map } from 'components';

const IndexPage = ({ places }) => (
  <Layout>
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
      <Link href="/places">
        <a>Places</a>
      </Link>
    </div>
    <Map places={places} />
  </Layout>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
