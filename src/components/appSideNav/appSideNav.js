import React, { useContext } from "react";
import { MainSideNav, NavItems } from "../../styles/carbonComponents";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import PropTypes from "prop-types";
import { SideNavLink } from "carbon-components-react";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import SaveSearch from "../../components/saveSearch/saveSearch.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    about: "About",
    aboutIn: " ~ Innovation Gateway",
    aboutGuide: " ~ Guidelines",
    company: "UK Government"
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

const AppSideNav = props => {
    const appContext = useContext(AppContext);
    return (
        <div id="main-side-nav">
            <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
                <NavPadding>
                    <SmallHeading>{appContext.userEmail}</SmallHeading>
                    <SmallText>{sideNavText.company}</SmallText>
                    <Line />
                </NavPadding>
                <NavItems>
                    {routes.map(route =>
                        !route.authenticationReq || (route.authenticationReq && appContext.authenticated === "true") ? (
                            <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                                <SideNavLink>{route.text}</SideNavLink>
                            </LinkNoDecoration>
                        ) : (
                            <React.Fragment />
                        )
                    )}
                </NavItems>
                {props.filter && (
                    <React.Fragment>
                        {appContext.authenticated === "true" && <SaveSearch />}
                        <FilterMenu />
                    </React.Fragment>
                )}
            </MainSideNav>
        </div>
    );
};

AppSideNav.propTypes = {
    filter: PropTypes.bool
};
export default AppSideNav;
