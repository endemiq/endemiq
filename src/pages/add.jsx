/** @jsx jsx */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown/with-html';
import { jsx } from '@emotion/core';

import { Layout, PlaceForm } from 'components';

const AddPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div css={tw('container py-2 md:py-5')}>
        <div css={tw('md:w-3/4')}>
          <Markdown
            source={t('addContent')}
            className="content"
            css={tw('md:w-3/4 mb-4')}
          />
          <PlaceForm />
        </div>
      </div>
    </Layout>
  );
};

AddPage.propTypes = {};
AddPage.defaultProps = {};

export default AddPage;
