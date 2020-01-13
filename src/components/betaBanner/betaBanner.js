import React from "react";
import { BetaWrapper, ParagraphText, BetaLabel, SmallSpace, TinySpace, WidthWrapper } from "../../styles/styles.js";

const textItems = {
    firstText: "This is a new service - your ",
    linkText: "feedback",
    secondText: " will help us improve it."
};

// const link = "https://docs.google.com/forms/d/e/1FAIpQLSdPuRFdqG7f0PA3OfJORxax9Mgk7I0H3c4ocHPlGFvuCExdhw/viewform";
const link = "http://help.healthdatagateway.org";

const BetaBanner = () => (
    <BetaWrapper>
        <WidthWrapper>
            <TinySpace />
            <BetaLabel>BETA</BetaLabel>
            <SmallSpace />
            <ParagraphText>
                {textItems.firstText}
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {textItems.linkText}
                </a>
                {textItems.secondText}
            </ParagraphText>
        </WidthWrapper>
    </BetaWrapper>
);

export default BetaBanner;
