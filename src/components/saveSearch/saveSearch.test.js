import React from "react";
import { create } from "react-test-renderer";
import SaveSearch from "./saveSearch.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";

import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";

import { SaveSearchButton, RightSmallInlineLoading } from "../../styles/carbonComponents.js";

const textItems = {
    saveSearch: "Save search",
    savedSearch: "Search saved",
    savingSearch: "Seach saving...",
    savingFailed: "Unable to save search",
    rename: "Rename",
    aria: {
        renameAndSaveSearch: "Rename and save search."
    },
    enterTextHere: "Enter text here..."
};

describe("<SaveSearch> ", () => {
    let renderedComponent;
    let renderedOutput;
    const searchTerm = "test";

    beforeEach(() => {
        context.search.term = searchTerm;
        renderedComponent = create(
            <MockedProvider mocks={apolloMock}>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <SaveSearch />
                    </StyleWrapper>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const saveButton = renderedOutput.findByType(SaveSearchButton);
        expect(saveButton.props.children[0]).toBe(textItems.saveSearch);
        expect(saveButton.props.children[1]).toBe(false);
    });

    it("should have correct props on components", () => {
        const saveButton = renderedOutput.findByType(SaveSearchButton);

        expect(typeof saveButton.props.onClick).toBe("function");
        expect(saveButton.props.kind).toBe("tertiary");
        expect(saveButton.props.disabled).toBe(false);
        expect(saveButton.props.status).toBe("active");
        expect(saveButton.props.size).toBe("small");
    });
});
