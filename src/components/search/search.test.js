import React from "react";
import { create } from "react-test-renderer";
import Search from "./search";
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
                <Search value="searchHeader" />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const paragraphHeading = renderedOutput.findAllByType(ParagraphHeading);
        const largeSpace = renderedOutput.findAllByType(LargeSpace);
        const smallSpace = renderedOutput.findAllByType(SmallSpace);
        const searchBar = renderedOutput.findAllByType(SearchBar);
        const centerBlock = renderedOutput.findAllByType(CenterBlock);

        expect(paragraphHeading).toHaveLength(1);
        expect(largeSpace).toHaveLength(1);
        expect(smallSpace).toHaveLength(1);
        expect(searchBar).toHaveLength(1);
        expect(centerBlock).toHaveLength(1);
    });
});
