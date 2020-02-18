/** @jsx jsx */
import React from 'react';
import Markdown from 'react-markdown/with-html';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Layout, Picture } from 'components';
import { fetchPlace } from 'services/api';
import { getHost, fixMD } from 'utils';

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
  } = Object.entries(place).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: val !== 'null' ? val : null }),
    {}
  );

  return (
    <Layout>
      {cover && (
        <Picture src={cover} ratio="16/5" sm="full" md="full" lg="full" />
      )}
      <div css={tw('container')}>
        <div css={tw('md:w-3/5 mx-auto my-4')} className="content">
          <section>
            <h1 css={tw('mt-1')}>{title}</h1>
            {subTitle && (
              <h2 className="h4" css={tw('mt-2')}>
                {subTitle}
              </h2>
            )}
            <p>
              <span>🏷️</span>
              <em>{t(`options.${type}`)}</em>
            </p>
          </section>

          <Markdown source={fixMD(description)} escapeHtml={false} />

          <section>
            <h2 css={tw('mb-2')}>{t('content.contact')}</h2>
            <p>
              {email && (
                <>
                  <a href={`mailto:${email}`}>{email}</a>
                  <br />
                </>
              )}
              {phone && (
                <>
                  <a href={`tel:${phone}`}>{phone}</a>
                  <br />
                </>
              )}
              {website && (
                <>
                  <a href={website}>{website}</a>
                  <br />
                </>
              )}
            </p>
            <Markdown source={fixMD(address)} escapeHtml={false} />
          </section>

          {openingHours && (
            <section>
              <h2>{t('content.opening')}</h2>
              <Markdown source={fixMD(openingHours)} escapeHtml={false} />
            </section>
          )}

          <section>
            <h2 css={tw('mb-2')}>{t('content.labels')}</h2>
            <ul css={tw('pl-2')}>
              {labels &&
                labels.map((label, i) => (
                  <li key={`label-${i}`}>{t(`options.${label}`)}</li>
                ))}
            </ul>
          </section>
        </div>
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
