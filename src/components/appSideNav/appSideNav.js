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

const routes = [
    {
        path: "/search",
        text: text.search
    },
    {
        path: "/my-searches",
        text: text.mySearches
    },
    {
        path: "/browse",
        text: text.browse
    },
    {
        path: "/about",
        text: text.about
    },
    {
        path: "/help",
        text: text.help
    }
];

const AppSideNav = () => (
    <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavHeading>{text.username}</NavHeading>
        <NavText>{text.company}</NavText>
        <MenuLine></MenuLine>
        <SideNavItems>
            {routes.map(route => (
                <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                    <SideNavLink>
                        <SideNavText>{route.text}</SideNavText>
                    </SideNavLink>
                </LinkNoDecoration>
            ))}
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
