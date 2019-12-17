import React, { useContext } from "react";
// import { MainSideNav, NavItems } from "../../styles/carbonComponents";
// import PropTypes from "prop-types";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding, WidthWrapper } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { NavigationWrapper, NavigationItem, NavigationHeader } from "./styles.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    about: "About",
    aboutIn: " ~ Innovation Gateway",
    aboutGuide: " ~ Guidelines"
};

const routes = [
    {
        path: "/search",
        text: sideNavText.search
    },
    {
        authenticationReq: true,
        path: "/my-searches",
        text: sideNavText.mySearches
    },
    {
        text: sideNavText.about
    },
    {
        path: "/innovation",
        text: sideNavText.aboutIn
    },
    {
        path: "/guidelines",
        text: sideNavText.aboutGuide
    }
];

const Navigation = () => {
    const appContext = useContext(AppContext);
    return (
        <NavigationWrapper>
            <WidthWrapper>
                <NavigationHeader aria-label="Site navigation">
                    {routes.map(route => (
                        <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                            <NavigationItem>{route.text}</NavigationItem>
                        </LinkNoDecoration>
                    ))}
                </NavigationHeader>
            </WidthWrapper>
        </NavigationWrapper>
    );
};

export default Navigation;
