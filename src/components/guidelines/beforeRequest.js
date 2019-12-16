import React from "react";

import {
    PageWrapper,
    ContentWrapper,
    ParagraphText,
    DarkText,
    SmallSpace,
    MediumSpace,
    ParagraphHeading
} from "../../styles/styles.js";

const textItems = {
    para1:
        "Before submitting a request for data access, it will be useful for you to consider the following as you may be asked to discuss some (or all) of the following aspects with the lead data custodian:",
    para2Title: "Approval from Research Ethics Committee",
    para2:
        "The Medical Research Council provides a decision tool to determine if your study requires approval from an NHS Research Ethics Committee. To access the tool, click here ",

    para2Link: "http://www.hra-decisiontools.org.uk/ethics",
    para2a: " Alternatively, you can find this guidance on the HRA website ",
    para2aLink: "http://www.hra.nhs.uk/documents/2013/09/does-my-project-require-rec-review.pdf",
    para3Title: "Data Sharing Framework Contract and/or Data Sharing Agreement",
    para3:
        "Some Data Custodians require your organisation to sign a Data Sharing Framework Contract (organisation / department level) and Data Sharing Agreement (study / project level). It may be worthwhile confirming whether your organisation has already signed a Data Sharing Framework Contract with the Lead Data Custodian, and whether this includes / covers your Department. Note that only a legal entity can sign a Data Sharing Agreement. ",
    para4Title: "Information Governance Toolkit ",
    para4:
        "Some Data Custodians require completion of the Information Governance (IG) Toolkit. If your organisation has completed the IG Toolkit ",
    para4Link: "https://www.igt.hscic.gov.uk/",
    para4a:
        " it may be useful to confirm with your local Information governance or IT security experts whether the arrangements for your study will be covered in this Toolkit return. More information is available from a NHS Digital security arrangements publication ",
    para4aLink:
        "http://www.digital.nhs.uk/media/15698/DARS---Guidance-Notes-on-Security/pdf/Guidance_Notes_on_Security_v4.0_(1).pdf",
    para5:
        "In regard tothe specific governance approach NHS Digital, the Medical Research Council (MRC) has worked with NHS Digital in developing a document outlining how to obtain data from NHS Digital. This document has further useful background information that can help you to get ready before contacting NHS Digital. You can find this document on the MRC website ",
    para5Link: "http://www.mrc.ac.uk/documents/pdf/obtaining-hscic-data-guidance-v020616/"
};
const GuidelinesBeforeRequest = () => {
    return (
        <PageWrapper>
            <ContentWrapper>
                <DarkText>
                    <ParagraphText>{textItems.para1}</ParagraphText>
                    <SmallSpace />
                    <ParagraphHeading>{textItems.para2Title}</ParagraphHeading>
                    <SmallSpace />
                    <ParagraphText>
                        {textItems.para2}
                        <a href={textItems.para2Link} target="_blank" rel="noopener noreferrer">
                            ({textItems.para2Link})
                        </a>
                        {textItems.para2a}
                        <a href={textItems.para2aLink} target="_blank" rel="noopener noreferrer">
                            ({textItems.para2aLink})
                        </a>
                    </ParagraphText>
                    <SmallSpace />
                    <ParagraphHeading>{textItems.para3Title}</ParagraphHeading>
                    <SmallSpace />
                    <ParagraphText>{textItems.para3}</ParagraphText>
                    <SmallSpace />
                    <ParagraphHeading>{textItems.para4Title}</ParagraphHeading>
                    <SmallSpace />
                    <ParagraphText>
                        {textItems.para4}
                        <a href={textItems.para4Link} target="_blank" rel="noopener noreferrer">
                            ({textItems.para4Link})
                        </a>
                        {textItems.para4a}
                        <a href={textItems.para4aLink} target="_blank" rel="noopener noreferrer">
                            ({textItems.para4aLink})
                        </a>
                    </ParagraphText>
                    <SmallSpace />
                    <ParagraphText>
                        {textItems.para5}
                        <a href={textItems.para5Link} target="_blank" rel="noopener noreferrer">
                            ({textItems.para5Link})
                        </a>
                    </ParagraphText>
                    <MediumSpace />
                </DarkText>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default GuidelinesBeforeRequest;
