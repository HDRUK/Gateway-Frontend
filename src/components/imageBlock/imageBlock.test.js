import React from "react";
import { create } from "react-test-renderer";
import ImageBlock from "./imageBlock";
import { ImageBlockWrapper, SmallImage } from "../../styles/styles.js";

describe("<ImageBlock> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<ImageBlock />);
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const imageBlockWrapper = renderedOutput.findAllByType(ImageBlockWrapper);
        const smallImage = renderedOutput.findAllByType(SmallImage);

        expect(imageBlockWrapper).toHaveLength(1);
        expect(smallImage).toHaveLength(3);
    });
});
