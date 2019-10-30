import React from "react";
import { create } from "react-test-renderer";
import Search from "./search";
import { ParagraphHeading, CenterBlock, LargeSpace, SmallSpace } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";

describe("<Search> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<Search />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const paragraphText = renderedComponent.root.findAllByType(ParagraphHeading);
        const darkText = renderedComponent.root.findAllByType(CenterBlock);
        const largeSpace = renderedComponent.root.findAllByType(LargeSpace);
        const smallSpace = renderedComponent.root.findAllByType(SmallSpace);
        const searchBar = renderedComponent.root.findAllByType(SearchBar);

        expect(paragraphText).toHaveLength(1);
        expect(darkText).toHaveLength(1);
        expect(largeSpace).toHaveLength(1);
        expect(smallSpace).toHaveLength(1);
        expect(searchBar).toHaveLength(1);
    });
});
