import React from "react";
// import PropTypes from "prop-types";
import { SideNavItems, SideNavLink } from "carbon-components-react";
import { MainSideNav, SideStripe, SideNavText, NavHeading, NavText, MenuLine } from "../../styles/styles.js";

const AppSideNav = () => (
    <MainSideNav isFixedNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavHeading>Nicola Blackwood</NavHeading>
        <NavText>UK Government</NavText>
        <MenuLine></MenuLine>
        <SideNavItems>
            <SideNavLink href="/search">
                <SideNavText>Search</SideNavText>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
                <SideNavText>My searches</SideNavText>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
                <SideNavText>Browse</SideNavText>
            </SideNavLink>
            <SideNavLink href="/about">
                <SideNavText>About</SideNavText>
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
                <SideNavText>Help</SideNavText>
            </SideNavLink>
        </SideNavItems>
        <SideStripe></SideStripe>
    </MainSideNav>
);

export default AppSideNav;
