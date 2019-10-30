import React from "react";

import Paragraph from "../../components/paragraph/paragraph";
import Login from "../../components/login/login";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";

import { ParagraphHeading, DarkText, NewListItem, LinkText, MediumSpace, SmallSpace } from "../../styles/styles.js";
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
    newsGroupHeading: "HDR News",
    newsItems: [
        {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        },
        {
            image: "",
            description: "HDR release news of new partners in exciting new digital project",
            readMore: "http://localhost:3000"
        }
    ]
};

const LandingPage = () => {
    return (
        <React.Fragment>
            <MediumSpace />
            <Login />

            <DarkText>
                <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                <SmallSpace />
                <Paragraph>{textItems.landingFirstPara}</Paragraph>
            </DarkText>
            <SmallSpace />
            <ImageBlock />
            <SmallSpace />
            <ParagraphHeading>{textItems.newsGroupHeading}</ParagraphHeading>
            <SmallSpace />
            <NewsTileGroup>
                <NewsTile
                    image={textItems.newsItems[0].image}
                    description={textItems.newsItems[0].description}
                    readMore={textItems.newsItems[0].readMore}
                />
                <NewsTile
                    image={textItems.newsItems[1].image}
                    description={textItems.newsItems[1].description}
                    readMore={textItems.newsItems[1].readMore}
                />
                <NewsTile
                    image={textItems.newsItems[2].image}
                    description={textItems.newsItems[2].description}
                    readMore={textItems.newsItems[2].readMore}
                />
            </NewsTileGroup>
            <SmallSpace />
            <DarkText>
                <ParagraphHeading>{textItems.landingSecondParaHeading}</ParagraphHeading>
                <SmallSpace />
                <Paragraph>{textItems.landingSecondPara}</Paragraph>
                <ParagraphBullets>
                    <NewListItem>{textItems.firstBullet}</NewListItem>
                    <NewListItem>{textItems.secondBullet}</NewListItem>
                    <NewListItem>{textItems.thirdBullet}</NewListItem>
                </ParagraphBullets>
                <MediumSpace />
                <ParagraphHeading>{textItems.landingThirdParaHeading}</ParagraphHeading>
                <SmallSpace />
                <Paragraph>{textItems.landingThirdPara}</Paragraph>
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
        </React.Fragment>
    );
};

export default LandingPage;
