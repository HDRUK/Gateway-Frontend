import React from "react";
import styled from "styled-components";
import { Font, ParagraphHeading, Heading, DarkText } from "../../styles/styles.js";

import Paragraph from "../../components/paragraph/paragraph.js";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";

const textItems = {
    landingHeading: "About the Innovation Gateway",
    landingFirstParaHeading: "What is the Innovation Gateway",
    landingFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

const LandingPageWrapper = styled.div`
    position: relative;
    padding: 4rem 4rem 4rem 4rem;
    background-color: #ffffff;
`;

const SideStripe = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1rem;
    background-color: #e5e5e5;
`;

const SideStripeRight = styled(SideStripe)`
    left: unset;
    right: 0;
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <SideStripe />
            <SideStripeRight />
            <Font>
                <DarkText>
                    <Heading>{textItems.landingHeading}</Heading>
                    <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                    <Paragraph>{textItems.landingFirstPara}</Paragraph>
                </DarkText>
                <ParagraphHeading>{textItems.newsGroupHeading}</ParagraphHeading>
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
            </Font>
        </LandingPageWrapper>
    );
};

export default LandingPage;
