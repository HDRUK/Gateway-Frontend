import React from "react";
import { SideNavItems, SideNavLink } from "carbon-components-react";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding } from "../../styles/styles.js";
import { MainSideNav } from "../../styles/carbonComponents";

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
        <NavPadding>
            <SmallHeading>{text.username}</SmallHeading>
            <SmallText>{text.company}</SmallText>
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
