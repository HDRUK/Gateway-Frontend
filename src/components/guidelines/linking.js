import React from "react";

import { ParagraphText, DarkText, MediumSpace } from "../../styles/styles.js";

const textItems = {
    para1:
        "You are recommended to discuss your requirements with the appropriate data custodian experts, in particular any requests for data linkages. They will have knowledge of any limitations and constraints in this area. In addition, they may also be able to advise who can assist you in linking thedatasets, if you require such a bespoke service.  Some datasets are already linked on a regular basis. It is expected that once an enquiry has been approved, access to these pre-linked datasets can be provided within reasonable timescales defined according to the data custodian policies."
};
const GuidelinesLinking = () => {
    return (
        <DarkText>
            <ParagraphText>{textItems.para1}</ParagraphText>
            <MediumSpace />
        </DarkText>
    );
};

export default GuidelinesLinking;
