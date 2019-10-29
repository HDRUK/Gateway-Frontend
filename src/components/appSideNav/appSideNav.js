import React from "react";
// import PropTypes from "prop-types";
import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";
import styled from "styled-components";
import { SideNavText, NavHeading, NavText, MenuLine } from "../../styles/styles.js";

import { Link } from "react-router-dom";

const AppSideNav = () => (
    <MainSideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavHeading>Nicola Blackwood</NavHeading>
        <NavText>UK Government</NavText>
        <MenuLine></MenuLine>
        <SideNavItems>
            <LinkNoDecoration to="/search">
                <SideNavLink>
                    <SideNavText href="javascript:void(0)">Search</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/my-searches">
                <SideNavLink>
                    <SideNavText href="javascript:void(0)">My searches</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/browse">
                <SideNavLink>
                    <SideNavText href="javascript:void(0)">Browse</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/about">
                <SideNavLink>
                    <SideNavText href="javascript:void(0)">About</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/help">
                <SideNavLink>
                    <SideNavText href="javascript:void(0)">Help</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
        </SideNavItems>
    </MainSideNav>
);

AppSideNav.propTypes = {};

const MainSideNav = styled(SideNav)`
    display: inline-block;
    position: absolute;
    background-color: #b5bab8;
    font-size: 1.2rem;
`;

const LinkNoDecoration = styled(Link)`
    text-decoration: none;
`;

export default AppSideNav;
