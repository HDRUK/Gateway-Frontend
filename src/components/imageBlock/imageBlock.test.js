import React from "react";
import { create } from "react-test-renderer";
import ImageBlock from "./imageBlock";
import { ImageBlockWrapper, SmallImage } from "../../styles/styles.js";

describe("<ImageBlock> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<ImageBlock />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const imageBlockWrapper = renderedComponent.root.findAllByType(ImageBlockWrapper);
        const smallImage = renderedComponent.root.findAllByType(SmallImage);

        expect(imageBlockWrapper).toHaveLength(1);
        expect(smallImage).toHaveLength(3);
    });
});
