import React from "react";
import { create } from "react-test-renderer";
import Search from "./search";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<Search> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <StyleWrapper>
                    <Search identifier="searchHeader" />
                </StyleWrapper>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the paragraph heading is displayed correctly", () => {
        const paragraphHeading = renderedOutput.findAllByType(ParagraphHeading);
        expect(paragraphHeading.length).toBe(1);
        expect(paragraphHeading[0].props.children).toBe("TestSearchHeader");
    });

    it("should check the large space element is displayed correctly", () => {
        const largeSpace = renderedOutput.findAllByType(LargeSpace);
        expect(largeSpace).toHaveLength(1);
    });

    it("should check the small space element is displayed correctly", () => {
        const smallSpace = renderedOutput.findAllByType(SmallSpace);
        expect(smallSpace).toHaveLength(1);
    });

    it("should check the center block element is displayed correctly", () => {
        const centerBlock = renderedOutput.findAllByType(CenterBlock);
        expect(centerBlock).toHaveLength(1);
    });

    it("should display the search bar and call the returnSearchResults function when the enter button is pressed", () => {
        const searchBar = renderedOutput.findAllByType(SearchBar);
        expect(searchBar).toHaveLength(1);

        searchBar[0].children[0].props.onKeyPress();
        expect(context.returnSearchResults).toHaveBeenCalled();
    });
});
