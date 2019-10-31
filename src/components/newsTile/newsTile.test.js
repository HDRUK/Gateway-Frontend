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
        const newsTileWrapper = renderedOutput.findByType(NewsTileWrapper);
        const imageSection = newsTileWrapper.findByType(ImageSection);
        const textSection = renderedOutput.findByType(TextSection);
        const description = textSection.findByType(Description);
        const readMore = textSection.findByType(ReadMore);

        expect(description.children[0].props.children).toEqual("TestDescription");
        console.log(imageSection);
        expect(imageSection.children[0].props.children).toEqual("TestImage");
        expect(readMore.children[0].props.children).toEqual("http://localhost:3000");
    });
});
