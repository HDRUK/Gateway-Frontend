import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import AppSideNav from "./appSideNav.js";
import { SideNavItems } from "carbon-components-react";
import { Line, SmallHeading, SmallText } from "../../styles/styles.js";
import { MainSideNav } from "../../styles/carbonComponents.js";

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
                <AppSideNav />
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render AppSideNav components", () => {
        const mainSideNav = renderedOutput.findByType(MainSideNav);
        expect(mainSideNav.props.expanded).toEqual(true);
        expect(mainSideNav.props.isChildOfHeader).toEqual(false);
        expect(mainSideNav.props["aria-label"]).toEqual("Side navigation");

        const components = mainSideNav.props.children;
        const navPadding = components[0];
        const navPaddingComponents = navPadding.props.children;
        expect(navPaddingComponents[0].type).toEqual(SmallHeading);
        expect(navPaddingComponents[0].props.children).toEqual(text.username);
        expect(navPaddingComponents[1].type).toEqual(SmallText);
        expect(navPaddingComponents[1].props.children).toEqual(text.company);
        expect(navPaddingComponents[2].type).toEqual(Line);

        const sideNavItems = components[1];
        expect(sideNavItems.type).toEqual(SideNavItems);

        const links = sideNavItems.props.children;
        routes.map((route, i) => {
            expect(links[i].props.to).toEqual(route.path);
            const sideNavLink = links[i].props.children;
            expect(sideNavLink.props.children).toEqual(route.text);
        });
    });
});
