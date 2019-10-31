import React from "react";
import { create } from "react-test-renderer";
import NewsTile from "./newsTile";
import { NewsTileWrapper, ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<NewsTile> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <NewsTile identifier={"newsItemOne"} />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const newsTileWrapper = renderedOutput.findAllByType(NewsTileWrapper);
        const imageSection = renderedOutput.findAllByType(ImageSection);
        const textSection = renderedOutput.findAllByType(TextSection);
        const description = renderedOutput.findAllByType(Description);
        const readMore = renderedOutput.findAllByType(ReadMore);

        expect(newsTileWrapper).toHaveLength(1);
        expect(imageSection).toHaveLength(1);
        expect(textSection).toHaveLength(1);
        expect(description).toHaveLength(1);
        expect(readMore).toHaveLength(1);

        expect(description[0].children[0].props.children).toEqual("Test");
    });
});
