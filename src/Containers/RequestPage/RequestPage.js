import React from "react";
import { LightText, StyledSmallBoldText, SmallSpace } from "../../styles/styles";
import { StyledForm, StyledTextInput } from "../../styles/carbonComponents";

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
            <SmallSpace></SmallSpace>
            <StyledForm>
                <StyledSmallBoldText>{textItems.aimHeader}</StyledSmallBoldText>
                <StyledTextInput labelText={textItems.aimHelpText}></StyledTextInput>
                <StyledSmallBoldText>{textItems.datasetHeader}</StyledSmallBoldText>
                <StyledTextInput labelText={textItems.datasetHelpText}></StyledTextInput>
                <StyledSmallBoldText>{textItems.requirementsHeader}</StyledSmallBoldText>
                <StyledTextInput labelText={textItems.requirementsHelpText}></StyledTextInput>
                <StyledSmallBoldText>{textItems.startDate}</StyledSmallBoldText>
                <StyledTextInput labelText={false}></StyledTextInput>
                <StyledSmallBoldText>{textItems.ico}</StyledSmallBoldText>
                <StyledTextInput labelText={false}></StyledTextInput>
            </StyledForm>
        </SmallSpace>
    );
};

export default RequestPage;
