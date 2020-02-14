/** @jsx jsx */
import React from 'react';
// import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Layout, PlaceForm } from 'components';

const FormPage = () => (
  <Layout>
    <div css={tw('container')}>
      <PlaceForm />
    </div>
  </Layout>
);

FormPage.propTypes = {};
FormPage.defaultProps = {};

export default FormPage;
