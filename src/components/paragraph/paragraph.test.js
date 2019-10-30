import React from "react";
import { create } from "react-test-renderer";
import Paragraph from "./paragraph";
import { ParagraphText, DarkText } from "../../styles/styles.js";

describe("<Paragraph> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<Paragraph />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const paragraphText = renderedComponent.root.findAllByType(ParagraphText);
        const darkText = renderedComponent.root.findAllByType(DarkText);

        expect(paragraphText).toHaveLength(1);
        expect(darkText).toHaveLength(1);
    });
});
