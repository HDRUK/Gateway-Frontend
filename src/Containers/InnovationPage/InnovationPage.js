import React from "react";

import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";

import { Heading, ParagraphHeading, DarkText, SmallSpace, ParagraphText } from "../../styles/styles.js";

const textItems = {
    mainHeading: "About the Innovation Gateway",
    subHeading: "What is the Innovation Gateway",
    mainText:
        "The Health Data Research Innovation Gateway provides a common access point to discover and request access to UK health data assets. Inofrmation about these assets can be searched or browsed, and using your institutional single sign-on, you can request access to an available dataset in the catalogue"
};

const InnovationPage = () => {
    return (
        <>
            <DarkText>
                <Heading>{textItems.mainHeading}</Heading>
                <SmallSpace />
                <ParagraphHeading>{textItems.subHeading}</ParagraphHeading>
                <SmallSpace />
                <ParagraphText>{textItems.mainText}</ParagraphText>
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
