import React from "react";
import { create } from "react-test-renderer";
import ImageBlock from "./imageBlock";
import Image from "../image/image";
import { ImageBlockWrapper, SmallImage } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<ImageBlock> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <ImageBlock>
                    <Image value="logoHDR" />
                    <Image value="logoHDR" />
                </ImageBlock>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const imageBlockWrapper = renderedOutput.findAllByType(ImageBlockWrapper);
        const smallImage = renderedOutput.findAllByType(SmallImage);

        expect(imageBlockWrapper).toHaveLength(1);
        expect(smallImage).toHaveLength(2);
    });
});
