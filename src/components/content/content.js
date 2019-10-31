import React from "react";
import { SideStripeLeft, SideStripeRight, ContentWrapper } from "../../styles/styles.js";
import AppSideNav from "../appSideNav/appSideNav.js";
import PropTypes from "prop-types";

const Content = props => (
    <React.Fragment>
        {props.nav && <AppSideNav />}
        <ContentWrapper nav={props.nav}>
            <SideStripeLeft />
            <SideStripeRight />
            {props.children}
        </ContentWrapper>
    </React.Fragment>
);

Content.propTypes = {
    nav: PropTypes.bool,
    children: PropTypes.node
};

export default Content;
