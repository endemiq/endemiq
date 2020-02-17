/** @jsx jsx */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown/with-html';
import { jsx } from '@emotion/core';

import { Layout } from 'components';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div css={tw('container py-2 md:py-5')}>
        <Markdown
          source={t('aboutContent')}
          css={tw('md:w-3/4')}
          className="content"
        />
      </div>
    </Layout>
  );
};

AboutPage.propTypes = {};
AboutPage.defaultProps = {};

export default AboutPage;
