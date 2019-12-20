import React, { useContext } from "react";
import { LinkNoDecoration, WidthWrapper } from "../../styles/styles.js";
import { NavigationWrapper, NavigationItem, NavigationHeader } from "./styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    about: "About",
    aboutIn: " ~ Innovation Gateway",
    aboutGuide: " ~ Guidelines"
};

const routes = [
    {
        authenticationReq: true,
        path: "/my-searches",
        text: sideNavText.mySearches
    },
    {
        path: "/innovation",
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

const Navigation = props => {
    const appContext = useContext(AppContext);
    const displayRoutes = appContext.authenticated ? routes : routes.filter(route => !route.authenticationReq);
    return (
        <NavigationWrapper>
            <WidthWrapper>
                <NavigationHeader aria-label="Site navigation">
                    {displayRoutes.map((route, i) => (
                        <LinkNoDecoration to={route.path} key={`route-${i}`}>
                            <NavigationItem active={props.location.pathname === route.path}>
                                {route.text}
                            </NavigationItem>
                        </LinkNoDecoration>
                    ))}
                </NavigationHeader>
            </WidthWrapper>
        </NavigationWrapper>
    );
};

export default Navigation;
