import React from "react";
import { create } from "react-test-renderer";
import Search from "./search";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";

describe("<Search> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<Search />);
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const paragraphText = renderedOutput.findAllByType(ParagraphHeading);
        const darkText = renderedOutput.findAllByType(CenterBlock);
        const largeSpace = renderedOutput.findAllByType(LargeSpace);
        const smallSpace = renderedOutput.findAllByType(SmallSpace);
        const searchBar = renderedOutput.findAllByType(SearchBar);

        expect(paragraphText).toHaveLength(1);
        expect(darkText).toHaveLength(1);
        expect(largeSpace).toHaveLength(1);
        expect(smallSpace).toHaveLength(1);
        expect(searchBar).toHaveLength(1);
    });
});
