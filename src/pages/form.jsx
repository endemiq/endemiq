import React from 'react';
// import PropTypes from 'prop-types';

import { Layout, PlaceForm } from 'components';

const FormPage = () => (
  <Layout>
    <div className="container">
      <PlaceForm />
    </div>
  </Layout>
);

FormPage.propTypes = {};
FormPage.defaultProps = {};

export default FormPage;
