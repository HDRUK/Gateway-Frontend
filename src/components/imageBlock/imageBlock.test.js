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
                    <Image identifier="logoHDR" />
                    <Image identifier="logoHDR" />
                </ImageBlock>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct elements are displayed", () => {
        const imageBlockWrapper = renderedOutput.findByType(ImageBlockWrapper);
        const smallImage = imageBlockWrapper.findAllByType(SmallImage);

        expect(smallImage).toHaveLength(2);
        expect(smallImage[0].props.children.props.identifier).toBe("logoHDR");
        expect(smallImage[1].props.children.props.identifier).toBe("logoHDR");
    });
});
