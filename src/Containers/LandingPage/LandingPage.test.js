import React from "react";
import { create } from "react-test-renderer";
import LandingPage from "./LandingPage.js";
import { MemoryRouter } from "react-router-dom";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";

import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ParagraphBanner from "../../components/paragraphBanner/paragraphBanner.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";

import {
    ParagraphAndHeaderBox,
    DarkText,
    SmallInlineSpace,
    SmallSpace,
    MediumSpace,
    MainImage,
    CenterBlock
} from "../../styles/styles.js";
import { LandingPageWrapper } from "./styles.js";

describe("<LandingPage> ", () => {
    const textItems = {
        landingFirstParaHeading: "What is the Innovation Gateway",
        landingFirstPara:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        landingSecondParaHeading: "Guidelines for using the Innovation Gateway",
        landingSecondPara:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        landingThirdParaHeading: "Help using the Innovation Gateway",
        landingThirdPara: "There are several ways to get help using the Innovation Gateway",
        firstBullet: "Lorem ipsum",
        secondBullet: "Lorem ipsum",
        thirdBullet: "Lorem ipsum",
        firstLink: "Frequently asked questions",
        secondLink: "Forum",
        thirdLink: "Get in touch with HDR UK",
        newsGroupHeading: "HDR News"
    };

    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <StyleWrapper>
                    <MemoryRouter>
                        <LandingPage />
                    </MemoryRouter>
                </StyleWrapper>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are displayed", () => {
        const landingPageWrapper = renderedOutput.findByType(LandingPageWrapper);
        const landingPageContent = landingPageWrapper.props.children;
        expect(landingPageContent).toHaveLength(10);
        expect(landingPageContent[0].type).toBe(MediumSpace);
        expect(landingPageContent[1].type).toBe(DarkText);
        expect(landingPageContent[2].type).toBe(MediumSpace);
        expect(landingPageContent[3].type).toBe(ParagraphBanner);
        expect(landingPageContent[4].type).toBe(MediumSpace);
        expect(landingPageContent[5].type).toBe(NewsTileGroup);
        expect(landingPageContent[6].type).toBe(MediumSpace);
        expect(landingPageContent[7].type).toBe(CenterBlock);
        expect(landingPageContent[8].type).toBe(SmallSpace);
        expect(landingPageContent[9].type).toBe(ImageBlock);

        const firstDarkTextContent = landingPageContent[1].props.children;
        expect(firstDarkTextContent).toHaveLength(3);
        expect(firstDarkTextContent[0].type).toBe(ParagraphAndHeaderBox);
        expect(firstDarkTextContent[1].type).toBe(SmallInlineSpace);
        expect(firstDarkTextContent[2].type).toBe(MainImage);

        const paragraphBannerContent = landingPageContent[3].props.children;
        expect(paragraphBannerContent).toHaveLength(3);

        const newsTiles = landingPageContent[5].props.children;
        expect(newsTiles).toHaveLength(3);
        expect(newsTiles[0].type).toBe(NewsTile);
        expect(newsTiles[1].type).toBe(NewsTile);
        expect(newsTiles[2].type).toBe(NewsTile);
        expect(newsTiles[0].props.identifier).toEqual("newsItemOne");
        expect(newsTiles[1].props.identifier).toEqual("newsItemTwo");
        expect(newsTiles[2].props.identifier).toEqual("newsItemThree");

        const partnerImages = landingPageContent[9].props.children;
        expect(partnerImages).toHaveLength(16);
    });
});
