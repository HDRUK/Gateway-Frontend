import { ParagraphText, DarkText } from "../../styles/styles.js";
import React from "react";

const Paragraph = ({ children }) => (
    <DarkText>
        <ParagraphText>{children}</ParagraphText>
    </DarkText>
);

export default Paragraph;
