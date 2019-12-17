import React from "react";

import { ParagraphText, DarkText, SmallSpace, MediumSpace, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    para1:
        "Once you have been directed to the appropriate data custodian experts, they will guide you through the process to submit your request for access to the health data. This process varies between data custodians.",
    para2:
        "Overall, you are required to clearly demonstrate that your request is being made to support the provision of health and social care, and the promotion of health. To do this, you can be expected to complete an application form and may be asked to provide the following material:",
    para3:
        "The data custodian expert will be able to advise you what data sets should be requested, and whether multiple request need to be submitted. In general, if multiple data sets are required for the same purpose, i.e. research study, you will need to complete one request which will be assessed throughone process. If you require multiple data sets for different purposes, i.e. multiple research studies, you will need to complete a request for each purpose..",
    bullet1: "A clearly defined researchstudy / question, such as a study protocol",
    bullet2:
        "A legal basis for accessing the data, e.g. evidence of patient consent or section 251 approval a(further information can be found on the page with guidance before submitting a request ",
    bullet2Link: "http://www.hdf.nihr.ac.uk/getting-ready/before-submitting",
    bullet3: "Security arrangements, such as IG Toolkit and ISO 27001",
    bullet4: "Evidence that you are complying with the GDPR",
    bullet5:
        "Clear indication of the data being requested, including the data sets and the specific data items / elements",
    bullet6: "Confirmation who will process and manage the data and/or, if applicable, who will link the data sets"
};
const GuidelinesRequest = () => {
    return (
        <DarkText>
            <ParagraphText>{textItems.para1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.para2}</ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                <NewListItem>{textItems.bullet1}</NewListItem>
                <SmallSpace />
                <NewListItem>
                    {textItems.bullet2}
                    <a href={textItems.bullet2Link} target="_blank" rel="noopener noreferrer">
                        ({textItems.bullet2Link})
                    </a>
                </NewListItem>
                <SmallSpace />
                <NewListItem>{textItems.bullet3}</NewListItem>
                <SmallSpace />
                <NewListItem>{textItems.bullet4}</NewListItem>
                <SmallSpace />
                <NewListItem>{textItems.bullet5}</NewListItem>
                <SmallSpace />
                <NewListItem>{textItems.bullet6}</NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>{textItems.para3}</ParagraphText>
            <MediumSpace />
        </DarkText>
    );
};

export default GuidelinesRequest;
