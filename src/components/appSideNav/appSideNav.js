import React from "react";
// import PropTypes from "prop-types";
import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";

const AppSideNav = () => (
    <SideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
            <SideNavLink href="javascript:void(0)">Search</SideNavLink>
            <SideNavLink href="javascript:void(0)">My searches</SideNavLink>
            <SideNavLink href="javascript:void(0)">Browse</SideNavLink>
            <SideNavLink href="javascript:void(0)">About</SideNavLink>
            <SideNavLink href="javascript:void(0)">Help</SideNavLink>
        </SideNavItems>
    </SideNav>
);

SideNav.propTypes = {};

export default AppSideNav;
