import { Font, ParagraphText, DarkText } from "../../styles/styles.js";
import React from "react";

const Paragraph = ({ children }) => (
    <Font>
        <DarkText>
            <ParagraphText>{children}</ParagraphText>
        </DarkText>
    </Font>
);

export default Paragraph;
