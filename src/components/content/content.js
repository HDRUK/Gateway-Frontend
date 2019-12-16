import React from "react";
import { ContentWrapper } from "../../styles/styles.js";
import AppSideNav from "../appSideNav/appSideNav.js";
import PropTypes from "prop-types";

const Content = props => (
    <React.Fragment>
        {props.nav && <AppSideNav filter={props.filter} />}
        <ContentWrapper nav={props.nav}>{props.children}</ContentWrapper>
    </React.Fragment>
);

Content.propTypes = {
    nav: PropTypes.bool,
    children: PropTypes.node,
    filter: PropTypes.bool
};

export default Content;
