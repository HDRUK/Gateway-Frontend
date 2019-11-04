import React from "react";
import { create } from "react-test-renderer";
import SearchPage from "./SearchPage.js";
import Search from "../../components/search/search.js";

import { SearchBar } from "../../styles/carbonComponents.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<SearchPage> rendered with 'form' state", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        context.state.searchPageState = "form";
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <SearchPage />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should test that the correct components are rendered", () => {
        const search = renderedOutput.findAllByType(Search);
        expect(search.length).toBe(1);
        expect(search[0].children[0].props.children.props.children[1].props.children).toBe("TestSearchHeader");
    });
});

describe("<SearchPage> rendered with 'results' state", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        context.state.searchPageState = "results";
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <SearchPage />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should test that the correct components are rendered", () => {
        const search = renderedOutput.findAllByType(SearchBar);
        expect(search.length).toBe(1);
        expect(search[0].children[0].props.labelText).toBe("Search");

        search[0].children[0].props.onKeyPress();
        expect(context.returnSearchResults).toHaveBeenCalled();
    });
});
