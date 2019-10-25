import { Font, ParagraphText, DarkText } from "../styles/styles.js";
import React from "react";

const Paragraph = ({ text }) => (
    <Font>
        <DarkText>
            <ParagraphText>{text}</ParagraphText>
        </DarkText>
    </Font>
);

export default Paragraph;
