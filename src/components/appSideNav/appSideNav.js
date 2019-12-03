import React, { useContext } from "react";
import { MainSideNav, NavItems } from "../../styles/carbonComponents";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import PropTypes from "prop-types";
import { SideNavLink } from "carbon-components-react";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    browse: "Browse",
    about: "About",
    help: "Help",
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
                    {routes.map(route => (
                        <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                            <SideNavLink>{route.text}</SideNavLink>
                        </LinkNoDecoration>
                    ))}
                </NavItems>
                {props.filter && <FilterMenu></FilterMenu>}
            </MainSideNav>
        </div>
    );
};

AppSideNav.propTypes = {
    filter: PropTypes.bool
};
export default AppSideNav;
