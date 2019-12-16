import React from "react";
import PropTypes from "prop-types";

import { LabeledContentWrapper, HeaderLabel, ContentText } from "./styles.js";

const LabeledContent = props => {
    return (
        <LabeledContentWrapper>
            <HeaderLabel>{props.label}</HeaderLabel>
            <ContentText lowercase={props.lowercase}>{props.children}</ContentText>
        </LabeledContentWrapper>
    );
};

LabeledContent.propTypes = {
    lowercase: PropTypes.bool
};

export default LabeledContent;
