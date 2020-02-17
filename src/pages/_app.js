import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'; // eslint-disable-line

import { MapContainer } from 'components';
import { getHost } from 'utils';
import makeStore from 'store/index';
import { getPlaces, setLoading } from 'store/places/places-actions';
import MapProvider from 'components/Map/MapProvider.jsx';

import 'minireset.css/minireset.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'draft-js/dist/Draft.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import 'locales/i18n';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx.store.getState().places.geojson === null) {
      const host = getHost(ctx.isServer, ctx.req);

      if (host) {
        console.log('fetch data', host);
        await ctx.store.dispatch(setLoading());
        await ctx.store.dispatch(getPlaces(host));
      }
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
        <MapProvider accessToken={process.env.MAPBOX_TOKEN}>
          <>
            <Component {...pageProps} />
            <MapContainer />
          </>
        </MapProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(CustomApp);
