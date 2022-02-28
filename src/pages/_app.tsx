import React from 'react';
import '../styles/reset.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};
