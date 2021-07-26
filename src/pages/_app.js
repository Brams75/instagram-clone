import React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // eslint-disable-line
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default MyApp;
