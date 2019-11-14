import React from "react";

import { useQuery } from "@apollo/react-hooks";
import Login from "../../components/login/login";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";
import { DATASET_COUNT } from "../../queries/queries.js";

import { LandingPageWrapper } from "./styles.js";
import {
    ParagraphHeading,
    DarkText,
    NewListItem,
    LinkText,
    SmallSpace,
    MediumSpace,
    ParagraphText
} from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

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

const LandingPage = () => {
    const { loading, error, data } = useQuery(DATASET_COUNT);
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error :(</div>;

    console.log("DATASET_COUNT", data.hdrDataModelSearch.count);
    return (
        <LandingPageWrapper>
            <MediumSpace />
            <SmallSpace />
            <SmallSpace />
            <Login />
            <DarkText>
                <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                <SmallSpace />
                <ParagraphText>{textItems.landingFirstPara}</ParagraphText>
            </DarkText>
            <SmallSpace />
            <ImageBlock>
                <Image identifier="logoHDR" />
                <Image identifier="logoHDR" />
                <Image identifier="logoHDR" />
            </ImageBlock>
            <SmallSpace />
            <ParagraphHeading>{textItems.newsGroupHeading}</ParagraphHeading>
            <SmallSpace />
            <NewsTileGroup>
                <NewsTile identifier="newsItemOne" />
                <NewsTile identifier="newsItemTwo" />
                <NewsTile identifier="newsItemThree" />
            </NewsTileGroup>
            <SmallSpace />
            <DarkText>
                <ParagraphHeading>{textItems.landingSecondParaHeading}</ParagraphHeading>
                <SmallSpace />
                <ParagraphText>{textItems.landingSecondPara}</ParagraphText>
                <ParagraphBullets>
                    <NewListItem>{textItems.firstBullet}</NewListItem>
                    <NewListItem>{textItems.secondBullet}</NewListItem>
                    <NewListItem>{textItems.thirdBullet}</NewListItem>
                </ParagraphBullets>
                <MediumSpace />
                <ParagraphHeading>{textItems.landingThirdParaHeading}</ParagraphHeading>
                <SmallSpace />
                <ParagraphText>{textItems.landingThirdPara}</ParagraphText>
            </DarkText>
            <ParagraphBullets>
                <NewListItem>
                    <LinkText>{textItems.firstLink}</LinkText>
                </NewListItem>
                <NewListItem>
                    <LinkText>{textItems.secondLink}</LinkText>
                </NewListItem>
                <NewListItem>
                    <LinkText>{textItems.thirdLink}</LinkText>
                </NewListItem>
            </ParagraphBullets>
        </LandingPageWrapper>
    );
};

export default LandingPage;
