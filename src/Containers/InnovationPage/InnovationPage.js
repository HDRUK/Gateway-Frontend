import React from "react";

import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";

import { Heading, ParagraphHeading, DarkText, SmallSpace, ParagraphText } from "../../styles/styles.js";

const textItems = {
    mainHeading: "About the Innovation Gateway",
    subHeading: "What is the Innovation Gateway",
    paragraph1:
        "The Health Data Research Innovation Gateway provides a common accesspoint to discover and enquire about access to UK health datasets held by members of the UK Health Data Research Alliance.  It provides detailed descriptions of these datasets, which include de-identified health information from the NHS, research institutes and charities, that is managed by individual data controllers.  You can find out more about the members of the UK Health Data Research Alliance here.",
    paragraph2:
        "The Innovation Gateway does not hold or store any personal health, care or personal identifiable information.",
    paragraph3:
        "This portal is the first phase of the Innovation Gateway’s development andhas been created with input from patients, the public, researchers and innovators working in health and care in the UK.  It will continue to be developed in partnership with these groups."
};

const InnovationPage = () => {
    return (
        <>
            <DarkText>
                <Heading>{textItems.mainHeading}</Heading>
                <SmallSpace />
                <ParagraphHeading>{textItems.subHeading}</ParagraphHeading>
                <SmallSpace />
                <ParagraphText>{textItems.paragraph1}</ParagraphText>
                <SmallSpace />
                <ParagraphText>{textItems.paragraph2}</ParagraphText>
                <SmallSpace />
                <ParagraphText>{textItems.paragraph3}</ParagraphText>
            </DarkText>
            <SmallSpace />
            <ImageBlock>
                <Image identifier="logoNHS" />
                <Image identifier="logoOXF" />
                <Image identifier="logoIBM" />
            </ImageBlock>
        </>
    );
};

export default InnovationPage;
