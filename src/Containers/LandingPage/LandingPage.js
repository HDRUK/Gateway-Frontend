import React from "react";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";

import { LandingPageWrapper } from "./styles.js";
import {
    ParagraphHeading,
    DarkText,
    Line,
    SmallInlineSpace,
    SmallSpace,
    MediumSpace,
    ParagraphText,
    ParagraphTextColored,
    ParagraphAndHeaderBox,
    ParagraphBox,
    MainImage
} from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    landingFirstParaHeading: "What is the Innovation Gateway?",
    landingFirstPara:
        "Welcome to the Health Data Research Innovation Gateway. This is a portal to find and enquire about access to UK health datasets for research.",
    landingSecondPara:
        "The Innovation Gateway provides detailed descriptions of these datasets, which you can search and enquire about access.  It does not hold or store any personal health, care or personal identifiable information."
};

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <MediumSpace />
            <DarkText>
                <ParagraphAndHeaderBox>
                    <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                    <SmallSpace />
                    <ParagraphBox>
                        <ParagraphTextColored>{textItems.landingFirstPara}</ParagraphTextColored>
                        <SmallSpace />
                        <ParagraphText>{textItems.landingSecondPara}</ParagraphText>
                    </ParagraphBox>
                    <SmallSpace />
                </ParagraphAndHeaderBox>
                <SmallInlineSpace />
                <MainImage src="" />
            </DarkText>
            <MediumSpace />
            <NewsTileGroup>
                <NewsTile identifier="newsItemOne" />
                <NewsTile identifier="newsItemTwo" />
                <NewsTile identifier="newsItemThree" />
            </NewsTileGroup>
            <SmallSpace />
            <Line />
            <SmallSpace />
            <ImageBlock>
                <Image identifier="logoHDR" />
                <Image identifier="logoHDR" />
                <Image identifier="logoHDR" />
            </ImageBlock>
        </LandingPageWrapper>
    );
};

export default LandingPage;
