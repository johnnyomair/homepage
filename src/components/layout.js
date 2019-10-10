/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Styles from "./layout.module.css";

const Layout = ({ children }) => {
  return <main className={Styles.container}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
