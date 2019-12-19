import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import AppSideNav from "./appSideNav.js";
import { MainSideNav, NavItems } from "../../styles/carbonComponents.js";
import FilterMenu from "../filters/filterMenu/filterMenu.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";
import { Line, SmallHeading, SmallText } from "../../styles/styles.js";
import SaveSearch from "../saveSearch/saveSearch.js";

describe("<AppSideNav> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <MemoryRouter initialEntries={["/search"]}>
                        <StyleWrapper>
                            <AppSideNav filter={false} />
                        </StyleWrapper>
                    </MemoryRouter>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render AppSideNav components", () => {
        const mainSideNav = renderedOutput.findAllByType(MainSideNav);
        expect(mainSideNav).toHaveLength(1);
        expect(mainSideNav[0].props.expanded).toEqual(true);
        expect(mainSideNav[0].props.isChildOfHeader).toEqual(false);
        expect(mainSideNav[0].props["aria-label"]).toEqual("Side navigation");
    });
});

describe("<AppSideNav> with filters", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <MemoryRouter initialEntries={["/search"]}>
                        <StyleWrapper>
                            <AppSideNav filter={true} />
                        </StyleWrapper>
                    </MemoryRouter>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });
    it("should render AppSideNav components", () => {
        const mainSideNav = renderedOutput.findByType(MainSideNav);
        const filterMenuFragment = mainSideNav.props.children;
        expect(filterMenuFragment.type).toEqual(React.Fragment);
        const saveSearch = filterMenuFragment.props.children[0];
        expect(saveSearch.type).toEqual(SaveSearch);
        const filterMenu = filterMenuFragment.props.children[1];
        expect(filterMenu.type).toEqual(FilterMenu);
    });
});
