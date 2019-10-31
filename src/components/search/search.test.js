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
                <Search identifier="searchHeader" />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const paragraphHeading = renderedOutput.findByType(ParagraphHeading);
        renderedOutput.findByType(LargeSpace);
        renderedOutput.findByType(SmallSpace);
        renderedOutput.findByType(SearchBar);
        renderedOutput.findByType(CenterBlock);

        expect(paragraphHeading.props.children).toBe("TestSearchHeader");
    });
});
