import React from "react";
import { LightText, StyledSmallBoldText, SmallSpace } from "../../styles/styles";

const textItems = {
    heading: "Request access for",
    aimHeader: "Research Aim",
    aimHelpText: "Please briefly explain the purpose of your research and why you require this dataset.",
    datasetHeader: "Linked Datasets",
    datasetHelpText: "Please identify the names of any datasets you would like to link with this one.",
    datasetCheckbox: "I don't want to link any datasets.",
    requirementsHeader: "Data Requirements",
    requirementsHelpText: "Please explain which parts of the dataset you are interested in.",
    requirementsCheckbox: "I don't know.",
    startDate: "Propsed Project Start Date",
    ico: "ICO Registration",
    benefitsHeader: "Research Benefits",
    benefitsHelpText: "Please provide evidence of how your research will benefit the health and social care system.",
    evidenceHeader: "Ethical Processing Evidence",
    evidenceHelpText:
        "Please provide a link(s) to relevant sources that showcase evidence of the fair processing of data by your organisation.",
    contact: "Contact Number",
    button: "Send Enquiry"
};

const RequestPage = () => {
    return (
        <SmallSpace>
            <StyledSmallBoldText>
                <LightText>{textItems.heading.toUpperCase()}</LightText>
            </StyledSmallBoldText>
            <StyledSmallBoldText>{textItems.aimHeader}</StyledSmallBoldText>
        </SmallSpace>
    );
};

export default RequestPage;
