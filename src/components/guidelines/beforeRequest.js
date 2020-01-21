import React from "react";

import { ParagraphText, DarkText, SmallSpace, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    para1:
        "All requests for access will be reviewed by the data custodians in line with their information governance requirements and responsibilities under UK legislation. Access will not be provided without meeting information governance requirements.",
    para2:
        "Before submitting an enquiry for data access, you need to consider the following as this information will be required by  data custodians:",
    para2bullet1:
        "Specific information governance and access requirements for the given dataset: where available, this is given in the Data Access section of the dataset page.",
    para2bullet2:
        "Ethical Approval for proposed use. The Medical Research Council provides a decision tool to determine if your study requires approval from an NHS Research Ethics Committee. To access the tool, ",

    para2bullet2Link: "http://www.hra-decisiontools.org.uk/ethics",
    para2bullet2Text: "click here. ",
    para2bullet2a: " Alternatively, you can find this guidance on the ",
    para2bullet2aLink: "http://www.hra.nhs.uk/documents/2013/09/does-my-project-require-rec-review.pdf",
    para2bullet2aText: "HRA website",
    para2bullet2b: ", which applies to England.",
    para2bullet3: "Legal basis for accessing and processing data.",
    para2bullet4:
        "Data Sharing Framework Contract and/or Data Sharing Agreement. Some Data Custodians require your organisation to sign a Data Sharing Framework Contract (organisation / department level) and Data Sharing Agreement (study / project level). It may be worthwhile confirming whether your organisation has already signed a Data Sharing Framework Contract with the Lead Data Custodian, and whether this includes / covers your Department. Note that only a legal entity can sign a Data Sharing Agreement.",
    para2bullet5: "Data Security and Protection Toolkit. The Data Security and Protection Toolkit ",
    para2bullet5Link: "https://www.dsptoolkit.nhs.uk/",
    para2bullet5LinkText: "(DSPT)",
    para2bullet5a:
        " is an online self-assessment tool that allows organisations to measure their performance against the National Data Guardian’s 10 data security standards.  All organisations in England that have access to NHS patient data and systems must use this toolkit to provide assurance that they are practising good data security and that personal information is handled correctly.  Some Data Custodians require completion of the Toolkit and independent audit of the self-assessment .  You can check the status of your organisation’s DSPT assessment ",

    para2bullet5aLink: "https://www.dsptoolkit.nhs.uk/OrganisationSearch",
    para2bullet5aLinkText: "here.",
    para2bullet5b: " If your organisation has completed the ",
    para2bullet5bLink: "https://www.dsptoolkit.nhs.uk/",
    para2bullet5bLinkText: "Toolkit",
    para2bullet5c:
        ", you should  confirm with your local Information Governance or IT security experts whether the arrangements for your study will be covered in this Toolkit return. More information is available from ",
    para2bullet5cLink: "https://www.dsptoolkit.nhs.uk/",
    para2bullet5cLinkText: "NHS Digital.",

    para3:
        "In regards to the specific governance approach NHS Digital, the Medical Research Council (MRC) has worked with NHS Digital in developing a document outlining how to obtain data from NHS Digital. This document has further useful background information that can help you to get ready before contacting NHS Digital. You can find this document on the ",
    para3Text: "MRC website.",
    para3Link: "http://www.mrc.ac.uk/documents/pdf/obtaining-hscic-data-guidance-v020616/"
};
const BeforeRequest = () => {
    return (
        <DarkText>
            <ParagraphText>{textItems.para1a}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.para1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.para2}</ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                <NewListItem>{textItems.para2bullet1}</NewListItem>
                <NewListItem>
                    {textItems.para2bullet2}
                    <a href={textItems.para2bullet2Link} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet2Text}
                    </a>
                    {textItems.para2bullet2a}
                    <a href={textItems.para2bullet2aLink} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet2aText}
                    </a>
                    {textItems.para2bullet2b}
                </NewListItem>
                <NewListItem>{textItems.para2bullet3}</NewListItem>
                <NewListItem>{textItems.para2bullet4}</NewListItem>
                <NewListItem>
                    {textItems.para2bullet5}
                    <a href={textItems.para2bullet5Link} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet5LinkText}
                    </a>
                    {textItems.para2bullet5a}
                    <a href={textItems.para2bullet5aLink} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet5aLinkText}
                    </a>
                    {textItems.para2bullet5b}
                    <a href={textItems.para2bullet5bLink} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet5bLinkText}
                    </a>
                    {textItems.para2bullet5c}
                    <a href={textItems.para2bullet5cLink} target="_blank" rel="noopener noreferrer">
                        {textItems.para2bullet5cLinkText}
                    </a>
                </NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>
                {textItems.para3}
                <a href={textItems.para3Link} target="_blank" rel="noopener noreferrer">
                    {textItems.para3Text}
                </a>
            </ParagraphText>
            <SmallSpace />
        </DarkText>
    );
};

export default BeforeRequest;
