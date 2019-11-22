import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../styles/theme.js";
import "../../carbon-components.css";

const GlobalStyles = createGlobalStyle`
  body {
        padding: 0;
        margin: 0;
        background-color: #3c3c3b;
        font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
    }
`;

const StyleWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

StyleWrapper.propTypes = {
    children: PropTypes.node
};

StyleWrapper.defaultProps = {
    children: null
};

export default StyleWrapper;
