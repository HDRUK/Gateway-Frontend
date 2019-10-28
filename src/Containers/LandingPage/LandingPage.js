import React from "react";
import {
    ParagraphHeading,
    DarkText,
    ParagraphBullets,
    NewListItem,
    LinkText,
    MediumSpace,
    SmallSpace
} from "../../styles/styles.js";
import Paragraph from "../../components/paragraph/paragraph";
import Login from "../../components/login/login";
import styled from "styled-components";

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
    thirdLink: "Get in touch with HDR UK"
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
            <Login></Login>

            <DarkText>
                <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                <SmallSpace></SmallSpace>
                <Paragraph>{textItems.landingFirstPara}</Paragraph>
                <ParagraphHeading>{textItems.landingSecondParaHeading}</ParagraphHeading>
                <SmallSpace></SmallSpace>
                <Paragraph>{textItems.landingSecondPara}</Paragraph>
                <ParagraphBullets>
                    <NewListItem>{textItems.firstBullet}</NewListItem>
                    <NewListItem>{textItems.secondBullet}</NewListItem>
                    <NewListItem>{textItems.thirdBullet}</NewListItem>
                </ParagraphBullets>
                <MediumSpace></MediumSpace>
                <ParagraphHeading>{textItems.landingThirdParaHeading}</ParagraphHeading>
                <SmallSpace></SmallSpace>
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
        </LandingPageWrapper>
    );
};

export default LandingPage;
