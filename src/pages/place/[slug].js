import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const PlacePage = ({ places }) => {
  const router = useRouter();
  const { slug } = router.query;
  const place = places.collection[slug];

  return (
    <>
      <img src={place.cover} width="100%" alt="cover" />
      <h1>{place.title}</h1>
      <h2>{place.subTitle}</h2>
      <em>{place.type}</em>
      <br />
      <br />
      <a href={`mailto:${place.email}`}>{place.email}</a>
      <a href={`tel:${place.phone}`}>{place.phone}</a>
      {/* eslint-disable */}
      <div dangerouslySetInnerHTML={{ __html: place.description }} />
      <div dangerouslySetInnerHTML={{ __html: place.openingHours }} />
      {/* eslint-enable */}
    </>
  );
};

PlacePage.propTypes = {
  places: PropTypes.object.isRequired,
};
PlacePage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(PlacePage);
