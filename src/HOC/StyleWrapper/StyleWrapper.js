import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/globalStyles.js";
import theme from "../../styles/theme.js";

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
