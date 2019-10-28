import React from "react";
import { ParagraphHeading, DarkText } from "../../styles/styles.js";
import Paragraph from "../../components/paragraph/paragraph";
import Login from "../../components/login/login";
import styled from "styled-components";

const textItems = {
    landingFirstParaHeading: "What is the Innovation Gateway",
    landingFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                <Paragraph>{textItems.landingFirstPara}</Paragraph>
            </DarkText>
        </LandingPageWrapper>
    );
};

export default LandingPage;
