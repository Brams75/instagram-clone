import React from "react";
import "../styles/reset.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // eslint-disable-line
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};

export default MyApp;
