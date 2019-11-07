import React from "react";
import { SideNavItems, SideNavLink } from "carbon-components-react";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding } from "../../styles/styles.js";
import { MainSideNav } from "../../styles/carbonComponents";

const sideNavText = {
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
        text: sideNavText.search
    },
    {
        path: "/my-searches",
        text: sideNavText.mySearches
    },
    {
        path: "/browse",
        text: sideNavText.browse
    },
    {
        path: "/about",
        text: sideNavText.about
    },
    {
        path: "/help",
        text: sideNavText.help
    }
];

const AppSideNav = () => (
    <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavPadding>
            <SmallHeading>{sideNavText.username}</SmallHeading>
            <SmallText>{sideNavText.company}</SmallText>
            <Line />
        </NavPadding>
        <SideNavItems>
            {routes.map(route => (
                <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                    <SideNavLink>{route.text}</SideNavLink>
                </LinkNoDecoration>
            ))}
        </SideNavItems>
    </MainSideNav>
);

export default AppSideNav;
