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
            <SideNavLink>
                <SideNavText href="/search">Search</SideNavText>
            </SideNavLink>
            <SideNavLink>
                <SideNavText href="javascript:void(0)">My searches</SideNavText>
            </SideNavLink>
            <SideNavLink>
                <SideNavText href="javascript:void(0)">Browse</SideNavText>
            </SideNavLink>
            <SideNavLink>
                <SideNavText href="javascript:void(0)">About</SideNavText>
            </SideNavLink>
            <SideNavLink>
                <SideNavText href="javascript:void(0)">Help</SideNavText>
            </SideNavLink>
        </SideNavItems>
        <SideStripe></SideStripe>
    </MainSideNav>
);

export default AppSideNav;
