import React from "react";
import styled from "styled-components";
import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";
import { NavHeading, NavText, MenuLine, LinkNoDecoration } from "../../styles/styles.js";
import { SideNavText } from "../../styles/carbonComponents.js";

const text = {
    search: "Search",
    mySearches: "My searches",
    browse: "Browse",
    about: "About",
    help: "Help",
    username: "Nicola Blackwood",
    company: "UK Government"
};

const AppSideNav = () => (
    <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavHeading>{text.username}</NavHeading>
        <NavText>{text.company}</NavText>
        <MenuLine></MenuLine>
        <SideNavItems>
            <LinkNoDecoration to="/search">
                <SideNavLink>
                    <SideNavText>{text.search}</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/my-searches">
                <SideNavLink>
                    <SideNavText>{text.mySearches}</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/browse">
                <SideNavLink>
                    <SideNavText>{text.browse}</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/about">
                <SideNavLink>
                    <SideNavText>{text.about}</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
            <LinkNoDecoration to="/help">
                <SideNavLink>
                    <SideNavText>{text.help}</SideNavText>
                </SideNavLink>
            </LinkNoDecoration>
        </SideNavItems>
    </MainSideNav>
);

const MainSideNav = styled(SideNav)`
    display: inline-block;
    position: absolute;
    background-color: #b5bab8;
    font-size: 1.2rem;
`;

export default AppSideNav;
