/** @jsx jsx */
import React from 'react';
import Markdown from 'react-markdown/with-html';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Layout, Picture } from 'components';
import { fetchPlace } from 'services/api';
import { getHost } from 'utils';

const PlacePage = ({ data }) => {
  const { t } = useTranslation();
  const place = data.place.revisions[0];
  const {
    cover,
    title,
    subTitle,
    type,
    email,
    phone,
    website,
    description,
    address,
    openingHours,
    labels,
  } = place;

  return (
    <Layout>
      {cover && (
        <Picture src={cover} ratio="16/5" sm="full" md="full" lg="full" />
      )}
      <div css={tw('container')}>
        <h1 css={tw('mt-1')}>{title}</h1>
        <h2 className="h4" css={tw('mt-2')}>
          {subTitle}
        </h2>
        <em>{t(`options.${type}`)}</em>
        <br />
        <br />
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <a href={`tel:${phone}`}>{phone}</a>
        <br />
        <a href={website}>{website}</a>
        <br />
        <br />
        <br />
        <Markdown source={description} />
        <Markdown source={address} />
        <Markdown source={openingHours} />
        {labels &&
          labels.map((label, i) => (
            <span key={`label-${i}`}>{t(`options.${label}`)}</span>
          ))}
      </div>
    </Layout>
  );
};

PlacePage.propTypes = {
  data: PropTypes.object.isRequired,
};
PlacePage.defaultProps = {};

PlacePage.getInitialProps = async ({ query, req, isServer }) => {
  const host = getHost(isServer, req);
  const { slug } = query;
  const { data } = await fetchPlace(slug, host);

  return { data };
};

export default PlacePage;
