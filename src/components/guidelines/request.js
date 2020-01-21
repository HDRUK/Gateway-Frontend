import React from "react";

import { ParagraphText, DarkText, SmallSpace, MediumSpace, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const bulletList = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6", "bullet7"];
const textItems = {
    para1:
        "Once you have been directed to the appropriate data custodians, they will guide you through the process to submit your enquiry  for access to the health data, in line with legislation and information governance requirements. This process varies between data custodians.",
    para2:
        "Overall, you are required to clearly demonstrate that your enquiry is being made to support the provision of health and social care, and the promotion of health. To do this, you can be expected to complete an application form and may be asked to provide the following material",
    para3:
        "The data custodian expert will be able to advise you what data sets should be requested, and whether multiple requests need to be submitted. In general, if multiple data sets are required for the same purpose, i.e. research study, you will need to complete one request which will be assessed through one process. If you require multiple data sets for different purposes, i.e. multiple research studies, you will need to complete a request for each purpose.",
    bullet1:
        "A clearly defined research study / question(such as a study protocol), research purpose and clearly defined the outputs/dissemination.",
    bullet2: "A legal basis for accessing the data. For example, evidence of patient consent or section 251 approval",
    bullet3: "Security arrangements, such as IG Toolkit and ISO 27001",
    bullet4: "Evidence that you are complying with the GDPR",
    bullet5:
        "Clear indication of the data being requested, including the data sets and the specific data items / elements",
    bullet6: "Confirmation who will process and manage the data and/or, if applicable, who will link the data sets",
    bullet7: "Confirmation of the authorised data sharing agreement signatory within your organisation",
    bullet8: "Additional information about what to do to prepare for making a dataset request is available from the ",
    bullet8Link: "http://www.hdf.nihr.ac.uk/getting-ready/before-submitting",
    bullet8LinkText: "NHS Health Data Finder"
};

const Request = () => {
    return (
        <DarkText>
            <ParagraphText>{textItems.para1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.para2}</ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                {bulletList.map(bulletItem => (
                    <NewListItem key={bulletItem}>{textItems[bulletItem]}</NewListItem>
                ))}
                <NewListItem>
                    {textItems.bullet8}
                    <a href={textItems.bullet8Link} target="_blank" rel="noopener noreferrer">
                        {textItems.bullet8LinkText}
                    </a>
                </NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>{textItems.para3}</ParagraphText>
            <MediumSpace />
        </DarkText>
    );
};

export default Request;
