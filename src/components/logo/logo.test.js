import React from "react";
import { create } from "react-test-renderer";
import Logo from "./logo";

describe("<Paragraph> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<Logo />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const img = renderedComponent.root.findAllByType("img");

        expect(img).toHaveLength(1);
    });
});
