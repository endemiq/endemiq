import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';

import makeStore from 'store/index';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

CustomApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default withRedux(makeStore)(App);
