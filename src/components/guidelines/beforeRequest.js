import React from "react";

import { ParagraphText, DarkText, SmallSpace, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    para1:
        "Before submitting an enquiry for data access, you need to consider the following as this information will be required by  data custodians:",
    para1bullet1: "Ethical Approval for proposed use",
    para2:
        "The Medical Research Council provides a decision tool to determine if your study requires approval from an NHS Research Ethics Committee. To access the tool, ",

    para2Link: "http://www.hra-decisiontools.org.uk/ethics",
    para2Text: "click here. ",
    para2a: " Alternatively, you can find this guidance on the ",
    para2aLink: "http://www.hra.nhs.uk/documents/2013/09/does-my-project-require-rec-review.pdf",
    para2aText: "HRA website. ",
    para2bullet1: "Legal basis for accessing and processing data.",
    para2bullet2:
        "Data Sharing Framework Contract and/or Data Sharing Agreement. Some Data Custodians require your organisation to sign a Data Sharing Framework Contract (organisation / department level) and Data Sharing Agreement (study / project level). It may be worthwhile confirming whether your organisation has already signed a Data Sharing Framework Contract with the Lead Data Custodian, and whether this includes / covers your Department. Note that only a legal entity can sign a Data Sharing Agreement.",
    para2bullet3:
        "Data Security and Protection Toolkit. The Data Security and Protection Toolkit (DSPT) is an online self-assessment tool that allows organisations to measure their performance against the National Data Guardian’s 10 data security standards.",

    para3:
        "All organisations that have access to NHS patient data and systems must use this toolkit to provide assurance that they are practising good data security and that personal information is handled correctly.  Some Data Custodians require completion of the Toolkit and independent audit of the self-assessment .  You can check the status of your organisation’s DSPT assessment ",
    para3Link: "https://www.dsptoolkit.nhs.uk/OrganisationSearch",
    para3Text: "here.",
    para3a: " If your organisation has completed the ",
    para3aLink: "https://www.dsptoolkit.nhs.uk/",
    para3aText: "Toolkit",
    para3b:
        ", you should  confirm with your local Information Governance or IT security experts whether the arrangements for your study will be covered in this Toolkit return. More information is available from ",
    para3bLink: "https://www.dsptoolkit.nhs.uk/",
    para3bText: "NHS Digital.",

    para4:
        "In regards to the specific governance approach NHS Digital, the Medical Research Council (MRC) has worked with NHS Digital in developing a document outlining how to obtain data from NHS Digital. This document has further useful background information that can help you to get ready before contacting NHS Digital. You can find this document on the ",
    para4Text: "MRC website.",
    para4Link: "http://www.mrc.ac.uk/documents/pdf/obtaining-hscic-data-guidance-v020616/"
};
const GuidelinesBeforeRequest = () => {
    return (
        <DarkText>
            <ParagraphText>{textItems.para1}</ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                <NewListItem>{textItems.para1bullet1}</NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>
                {textItems.para2}
                <a href={textItems.para2Link} target="_blank" rel="noopener noreferrer">
                    {textItems.para2Text}
                </a>
                {textItems.para2a}
                <a href={textItems.para2aLink} target="_blank" rel="noopener noreferrer">
                    {textItems.para2aText}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                <NewListItem>{textItems.para2bullet1}</NewListItem>
                <NewListItem>{textItems.para2bullet2}</NewListItem>
                <NewListItem>{textItems.para2bullet3}</NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>
                {textItems.para3}
                <a href={textItems.para3Link} target="_blank" rel="noopener noreferrer">
                    {textItems.para3Text}
                </a>
                {textItems.para3a}
                <a href={textItems.para3aLink} target="_blank" rel="noopener noreferrer">
                    {textItems.para3aText}
                </a>
                {textItems.para3b}
                <a href={textItems.para3bLink} target="_blank" rel="noopener noreferrer">
                    {textItems.para3bText}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphText>
                {textItems.para4}
                <a href={textItems.para4Link} target="_blank" rel="noopener noreferrer">
                    {textItems.para4Text}
                </a>
            </ParagraphText>
            <SmallSpace />
        </DarkText>
    );
};

export default GuidelinesBeforeRequest;
