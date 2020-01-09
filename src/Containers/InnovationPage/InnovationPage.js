import React from "react";

import { Heading, ParagraphHeading, DarkText, SmallSpace, ParagraphText, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

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
        "This portal is the first phase of the Innovation Gateway’s development and has been created with input from patients, the public, researchers and innovators working in health and care in the UK.  It will continue to be developed in partnership with these groups.",
    sec2Heading1: "Why is health data needed for research and innovation?",
    sec2p1:
        "Research and innovation, based on data that reflects a diversity of culture, healthcare conditions and aspects such as race, ethnicity, gender and age, improves the ability to generalise results and enables new discoveries and understanding about disease. In turn this provides fairer and more equal access to the latest treatments and medical technologies, benefiting as many people across the UK as possible.",
    sec2p2:
        "The NHS and other organisations which use data to enable health research already make their de-identified data available to researchers and innovators.  This helps, for example, to:",
    sec2bullet1: "develop new drugs",
    sec2bullet2: "establish the risk for people’s health of factors such as obesity, pollution, and homelessness",
    sec2bullet3:
        "develop best practice for health and care services, improving the quality of care and people’s quality of life.",

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
    sec5p1part2: " and we would be pleased to hear from you.",
    sec6Heading1: "What if I don’t want my health data to be used?",
    sec6p1part1:
        "It is usually possible to opt out of sharing health data held in personal records about you. To do this, contact the organisation that holds the record (such as your GP practice or hospital). If you live in England you can opt out of your data being used for research via the NHS Digital website ",
    sec6p1link1: "https://digital.nhs.uk/services/national-data-opt-out"
};

const InnovationPage = () => {
    return (
        <DarkText>
            <Heading>{textItems.mainHeading}</Heading>
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
            <ParagraphHeading>{textItems.sec2Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p2}</ParagraphText>
            <ParagraphBullets>
                <NewListItem>{textItems.sec2bullet1}</NewListItem>
                <NewListItem>{textItems.sec2bullet2}</NewListItem>
                <NewListItem>{textItems.sec2bullet3}</NewListItem>
            </ParagraphBullets>
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
            <ParagraphHeading>{textItems.sec6Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec6p1part1}
                <a href={textItems.sec6p1link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec6p1link1}
                </a>
            </ParagraphText>
            <SmallSpace />
        </DarkText>
    );
};

export default InnovationPage;
