import React from "react";
import PropTypes from "prop-types";
import { ParagraphText, DarkText } from "../../styles/styles.js";

const Paragraph = ({ children }) => (
  <DarkText>
    <ParagraphText>{children}</ParagraphText>
  </DarkText>
);

Paragraph.propTypes = {
  children: PropTypes.node
};

export default Paragraph;
