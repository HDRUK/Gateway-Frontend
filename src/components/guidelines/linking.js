import React from "react";

import { ParagraphText, DarkText, MediumSpace } from "../../styles/styles.js";

const textItems = {
    para1:
        "You are recommended to discuss your requirements with the appropriate data custodian experts, in particular any requests for data linkages. They will have knowledge of any limitations and constraints in this area. In addition, they may also be able to advise who can assist you in linking the data sets, if you require such a service.  Some data sets are already linked on a regular basis. It is expected that once a request has been approved, access to these linked data sets can be provided within reasonable timescales."
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
