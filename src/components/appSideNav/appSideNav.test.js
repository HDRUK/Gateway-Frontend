import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import AppSideNav from "./appSideNav.js";
import { MenuLine } from "../../styles/styles.js";
import { MainSideNav, NavItems } from "../../styles/carbonComponents.js";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

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
        expect(components[0].props.children).toEqual(text.username);
        expect(components[1].props.children).toEqual(text.company);
        expect(components[2].type).toEqual(MenuLine);
        expect(components[3].type).toEqual(NavItems);

        const links = components[3].props.children;
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

        expect(components[4].type).toEqual(FilterMenu);
    });
});
