import React from "react";
import PropTypes from "prop-types";
import { Font, ParagraphText, DarkText } from "../../styles/styles.js";

const Paragraph = ({ children }) => (
    <Font>
        <DarkText>
            <ParagraphText>{children}</ParagraphText>
        </DarkText>
    </Font>
);

Paragraph.propTypes = {
    children: PropTypes.node
};

export default Paragraph;
