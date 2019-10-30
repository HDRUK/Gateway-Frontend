import React from "react";
import { create } from "react-test-renderer";
import NewsTile from "./newsTile";
import { NewsTileWrapper, ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";

describe("<NewsTile> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<NewsTile readMore={"test"} description={"test"} image={"test"} />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const newsTileWrapper = renderedComponent.root.findAllByType(NewsTileWrapper);
        const imageSection = renderedComponent.root.findAllByType(ImageSection);
        const textSection = renderedComponent.root.findAllByType(TextSection);
        const description = renderedComponent.root.findAllByType(Description);
        const readMore = renderedComponent.root.findAllByType(ReadMore);

        expect(newsTileWrapper).toHaveLength(1);
        expect(imageSection).toHaveLength(1);
        expect(textSection).toHaveLength(1);
        expect(description).toHaveLength(1);
        expect(readMore).toHaveLength(1);
    });
});
