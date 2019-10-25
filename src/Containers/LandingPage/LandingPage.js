import React from "react";
import { Font, ParagraphHeading, DarkText } from "../../styles/styles.js";
import Paragraph from "../../components/paragraph/paragraph";
import Login from "../../components/login/login";

const textItems = {
    landingHeading: "About the Innovation Gateway",
    landingFirstParaHeading: "What is the Innovation Gateway",
    landingFirstPara:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const LandingPage = () => {
    return (
        <div>
            <Login></Login>
            <Font>
                <DarkText>
                    <ParagraphHeading>{textItems.landingFirstParaHeading}</ParagraphHeading>
                </DarkText>
            </Font>
            <Paragraph>{textItems.landingFirstPara}</Paragraph>
        </div>
    );
};

export default LandingPage;
