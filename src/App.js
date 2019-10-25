import React from "react";
import { Font, ParagraphHeading, Heading, DarkText } from "./styles/styles.js";
import Paragraph from "./components/paragraph";

const textItems = {
    headingText: "About the Innovation Gateway",
    paragraphHeading: "What is the Innovation Gateway",
    paragraphText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const App = () => (
    <Font>
        <DarkText>
            <Heading>{textItems.headingText}</Heading>
            <ParagraphHeading>{textItems.paragraphHeading}</ParagraphHeading>
            <Paragraph>{textItems.paragraphText}</Paragraph>
        </DarkText>
    </Font>
);

export default App;
