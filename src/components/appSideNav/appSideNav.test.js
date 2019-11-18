import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import AppSideNav from "./appSideNav.js";
import { MainSideNav, NavItems } from "../../styles/carbonComponents.js";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import { Line, SmallHeading, SmallText } from "../../styles/styles.js";

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

describe("<AppSideNav> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter initialEntries={["/search"]}>
                <AppSideNav filter={false} />
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render AppSideNav components", () => {
        const mainSideNav = renderedOutput.findAllByType(MainSideNav);
        expect(mainSideNav).toHaveLength(1);
        expect(mainSideNav[0].props.expanded).toEqual(true);
        expect(mainSideNav[0].props.isChildOfHeader).toEqual(false);
        expect(mainSideNav[0].props["aria-label"]).toEqual("Side navigation");

        const components = mainSideNav[0].props.children;
        const navPadding = components[0];
        const navPaddingComponents = navPadding.props.children;
        expect(navPaddingComponents[0].type).toEqual(SmallHeading);
        expect(navPaddingComponents[0].props.children).toEqual(sideNavText.username);
        expect(navPaddingComponents[1].type).toEqual(SmallText);
        expect(navPaddingComponents[1].props.children).toEqual(sideNavText.company);
        expect(navPaddingComponents[2].type).toEqual(Line);

        const sideNavItems = components[1];
        expect(sideNavItems.type).toEqual(NavItems);

        const links = sideNavItems.props.children;
        routes.map((route, i) => {
            expect(links[i].props.to).toEqual(route.path);
            const sideNavLink = links[i].props.children;
            expect(sideNavLink.props.children).toEqual(route.text);
        });
    });
});

describe("<AppSideNav> with filters", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <MemoryRouter initialEntries={["/search"]}>
                    <AppSideNav filter={true} />
                </MemoryRouter>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });
    it("should render AppSideNav components", () => {
        const mainSideNav = renderedOutput.findByType(MainSideNav);
        const components = mainSideNav.props.children;
        const filterMenu = components[2];
        expect(filterMenu.type).toEqual(FilterMenu);
    });
});
