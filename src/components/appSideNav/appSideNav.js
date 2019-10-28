import React from "react";
// import PropTypes from "prop-types";
import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const AppSideNav = () => (
    <TestAppSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
            <SideNavLink href="javascript:void(0)">Search</SideNavLink>
            <SideNavLink href="javascript:void(0)">My searches</SideNavLink>
            <SideNavLink href="javascript:void(0)">Browse</SideNavLink>
            <SideNavLink href="javascript:void(0)">About</SideNavLink>
            <SideNavLink href="javascript:void(0)">Help</SideNavLink>
        </SideNavItems>
    </TestAppSideNav>
);

SideNav.propTypes = {};

const TestAppSideNav = styled(SideNav)`
    position: absolute !important;
    top: unset !important;
    bottom: unset !important;
    left: unset !important;
`;

export default AppSideNav;
