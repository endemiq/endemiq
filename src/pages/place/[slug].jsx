import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Layout } from 'components';

const PlacePage = ({ places }) => {
  const router = useRouter();
  const { slug } = router.query;
  const place = places.collection[slug];

  return (
    <Layout>
      <img src={place.cover} width="100%" alt="cover" />
      <div className="container">
        <h1 className="mt-1">{place.title}</h1>
        <h2 className="h4 mt-2">{place.subTitle}</h2>
        <em>{place.type}</em>
        <br />
        <br />
        <a href={`mailto:${place.email}`}>{place.email}</a>
        <a href={`tel:${place.phone}`}>{place.phone}</a>
        <br />
        <br />
        {/* eslint-disable */}
        <div dangerouslySetInnerHTML={{ __html: place.description }} />
        <div  className="mt-3" dangerouslySetInnerHTML={{ __html: place.openingHours }} />
        {/* eslint-enable */}
      </div>
    </Layout>
  );
};

PlacePage.propTypes = {
  places: PropTypes.object.isRequired,
};
PlacePage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(PlacePage);
