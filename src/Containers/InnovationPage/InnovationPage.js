import React from "react";

import { ThinHeading, ParagraphHeading, DarkText, SmallSpace, ParagraphText } from "../../styles/styles.js";

const textItems = {
    mainHeading: "About the Innovation Gateway",
    sec1p1:
        "The Health Data Research Innovation Gateway provides a common access point to discover and enquire about access to UK health datasets for research and innovation held by members of the UK Health Data Research Alliance.  It provides detailed information about the datasets, such as a description, size of the population, and the legal basis for access. ",
    sec1p2:
        "The datasets that are discoverable through the Innovation Gateway are from organisations in the NHS, research institutes and charities, which are part of the UK Health Data Research Alliance.  You can find out more about the members of the ",
    sec1p2link1: "http://www.ukhealthdata.org/",
    sec1p2link1text: "UK Health Data Research Alliance here.",
    sec1p2part2:
        " The information on the Innovation Gateway has been provided by the relevant data custodians.  As this is phase one, there may be some spelling or grammatical errors or some information missing, and this will be continually updated.",
    sec1p3: "The Innovation Gateway does not hold or store any patient or health data.",
    sec1p4:
        "This portal is phase one of the Innovation Gateway’s development (known as the Minimum Viable Product) and has been created with input from patients, the public, researchers and innovators working in health and care in the UK.  It will continue to be developed in partnership with these groups.",

    sec3Heading1: "Who manages the Innovation Gateway?",
    sec3p1part1: "The Health Data Research Innovation Gateway is managed by ",
    sec3p1link1: "http://www.hdruk.ac.uk/",
    sec3p1link1text: "Health Data Research UK",
    sec3p1part2: " in collaboration with the ",
    sec3p1link2: "http://www.ukhealthdata.org/",
    sec3p1link2text: "UK Health Data Research Alliance.",
    sec3p1part3: " It is funded by ",
    sec3p1link3: "https://www.ukri.org/innovation/industrial-strategy-challenge-fund/",
    sec3p1link3text: "UK Research and Innovation’s Industrial Strategy Challenge Fund.",

    sec4Heading1: "What is Health Data Research UK?",
    sec4p1:
        "Health Data Research UK is a non-profit company limited by guarantee, owned by UK Research and Innovation and the Chairperson of the Board and governed by a Board of Trustees.  Its funding is from charities and public bodies.",

    sec5Heading1: "How can I get involved in the development of the Innovation Gateway?",
    sec5p1part1:
        "Whether you are a researcher needing health data for your work, a data controller wishing to join the Alliance or a patient or member of the public wanting to find out more information, you can email Health Data Research UK at ",
    sec5p1email1: "enquiries@hdruk.ac.uk",
    sec5p1part2: " and we would be pleased to hear from you."
};

const InnovationPage = () => {
    return (
        <DarkText>
            <ThinHeading>{textItems.mainHeading}</ThinHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec1p1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec1p2}
                <a href={textItems.sec1p2link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec1p2link1text}
                </a>
                {textItems.sec1p2part2}
            </ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec1p3}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec1p4}</ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec3Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec3p1part1}
                <a href={textItems.sec3p1link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec3p1link1text}
                </a>
                {textItems.sec3p1part2}
                <a href={textItems.sec3p1link2} target="_blank" rel="noopener noreferrer">
                    {textItems.sec3p1link2text}
                </a>
                {textItems.sec3p1part3}
                <a href={textItems.sec3p1link3} target="_blank" rel="noopener noreferrer">
                    {textItems.sec3p1link3text}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec4Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec4p1}</ParagraphText>
            <SmallSpace /> <ParagraphHeading>{textItems.sec5Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec5p1part1}
                <a href="mailto:enquiries@hdruk.ac.uk" target="_top">
                    {textItems.sec5p1email1}
                </a>
                {textItems.sec5p1part2}
            </ParagraphText>
            <SmallSpace />
        </DarkText>
    );
};

export default InnovationPage;
