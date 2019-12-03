import React from "react";
import { MainSideNav, NavItems } from "../../styles/carbonComponents";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import PropTypes from "prop-types";
import { SideNavLink } from "carbon-components-react";
import { SmallHeading, SmallText, Line, LinkNoDecoration, NavPadding } from "../../styles/styles.js";

const sideNavText = {
    search: "Search",
    mySearches: "My searches",
    browse: "Browse",
    about: "About",
    help: "Help",
    username: "Marie Curie",
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
    return (
        <div id="main-side-nav">
            <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
                <NavPadding>
                    <SmallHeading>{sideNavText.username}</SmallHeading>
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
