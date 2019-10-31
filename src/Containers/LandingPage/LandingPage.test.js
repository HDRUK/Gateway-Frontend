import React from "react";
import { create } from "react-test-renderer";
import LandingPage from "./LandingPage.js";
import { BrowserRouter } from "react-router-dom";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

import Paragraph from "../../components/paragraph/paragraph.js";
import Login from "../../components/login/login.js";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";

import { ParagraphHeading, DarkText, NewListItem, LinkText, MediumSpace, SmallSpace } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

describe("<LandingPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>
            </AppContext.Provider>
        );
    });

    it("should test the LandingPage Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the crrect components are displayed", () => {
        const paragraphs = renderedComponent.root.findAllByType(Paragraph);
        const login = renderedComponent.root.findAllByType(Login);
        const newsTiles = renderedComponent.root.findAllByType(NewsTile);
        const newsTileGroup = renderedComponent.root.findAllByType(NewsTileGroup);
        const imageBlock = renderedComponent.root.findAllByType(ImageBlock);
        const paragraphHeadings = renderedComponent.root.findAllByType(ParagraphHeading);
        const paragraphBullets = renderedComponent.root.findAllByType(ParagraphBullets);
        const darkTexts = renderedComponent.root.findAllByType(DarkText);
        const smallSpaces = renderedComponent.root.findAllByType(SmallSpace);
        const mediumSpaces = renderedComponent.root.findAllByType(MediumSpace);
        const newListsItems = renderedComponent.root.findAllByType(NewListItem);
        const linkTexts = renderedComponent.root.findAllByType(LinkText);

        expect(paragraphs).toHaveLength(3);
        expect(login).toHaveLength(1);
        expect(newsTiles).toHaveLength(3);
        expect(newsTileGroup).toHaveLength(1);
        expect(imageBlock).toHaveLength(1);
        expect(paragraphHeadings).toHaveLength(4);
        expect(paragraphBullets).toHaveLength(2);
        expect(darkTexts).toHaveLength(6);
        expect(smallSpaces).toHaveLength(8);
        expect(mediumSpaces).toHaveLength(3);
        expect(newListsItems).toHaveLength(6);
        expect(linkTexts).toHaveLength(3);
    });
});
