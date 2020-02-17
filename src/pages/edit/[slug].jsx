/** @jsx jsx */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown/with-html';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Layout, PlaceForm } from 'components';
import { fetchPlace } from 'services/api';
import { getHost } from 'utils';

const EditPage = ({ data }) => {
  const { t } = useTranslation();

  const { id, geolocation } = data.place;
  const place = data.place.revisions[0];

  return (
    <Layout>
      <div css={tw('container py-2 md:py-5')}>
        <div css={tw('md:w-3/4')}>
          <Markdown
            source={t('editContent')}
            className="content"
            css={tw('md:w-3/4 mb-4')}
          />
          <PlaceForm data={{ ...place, id, geolocation }} isUpdate />
        </div>
      </div>
    </Layout>
  );
};

EditPage.propTypes = {
  data: PropTypes.object.isRequired,
};
EditPage.defaultProps = {};

EditPage.getInitialProps = async ({ query, req, isServer }) => {
  const host = getHost(isServer, req);
  const { slug } = query;
  const { data } = await fetchPlace(slug, host);

  return { data };
};

export default EditPage;
