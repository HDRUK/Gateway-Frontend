import React, { useContext } from "react";
import { LinkNoDecoration, WidthWrapper } from "../../styles/styles.js";
import { NavigationWrapper, NavigationItem, NavigationHeader } from "./styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    about: "About",
    aboutIn: " ~ Innovation Gateway",
    aboutGuide: " ~ Guidelines",
    aboutGlossary: " ~ Glossary",
    aboutFAQ: " ~ FAQ"
};

const routes = [
    {
        authenticationReq: true,
        path: "/my-searches",
        text: sideNavText.mySearches
    },
    {
        path: "/innovation",
        text: sideNavText.about,
        additionalPaths: ["/guidelines", "/glossary", "/faq"]
    }
];

const Navigation = props => {
    const appContext = useContext(AppContext);
    const pathname = props.location.pathname;
    const displayRoutes = appContext.authenticated ? routes : routes.filter(route => !route.authenticationReq);

    return (
        <NavigationWrapper>
            <WidthWrapper>
                <NavigationHeader aria-label="Site navigation">
                    {displayRoutes.map((route, i) => (
                        <LinkNoDecoration to={route.path} key={`route-${i}`}>
                            <NavigationItem
                                active={
                                    pathname === route.path ||
                                    (route.additionalPaths && route.additionalPaths.includes(pathname))
                                }
                            >
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
