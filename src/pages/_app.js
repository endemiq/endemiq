import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'; // eslint-disable-line

import makeStore from 'store/index';
import { getPlaces, setLoading } from 'store/places/places-actions';

import 'minireset.css/minireset.css';
import 'mapbox-gl/dist/mapbox-gl.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx.store.getState().places.geojson === null) {
      console.log('load firestore');
      await ctx.store.dispatch(setLoading());
      await ctx.store.dispatch(getPlaces());
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(CustomApp);
