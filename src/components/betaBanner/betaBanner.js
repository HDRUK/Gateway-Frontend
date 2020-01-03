import React from "react";
import { BetaWrapper, ParagraphText, BetaLabel, SmallSpace, TinySpace } from "../../styles/styles.js";

const textItem = "This is a new service - your feedback will help us improve it.";

const BetaBanner = () => (
    <BetaWrapper>
        <TinySpace></TinySpace>
        <BetaLabel>BETA</BetaLabel>
        <SmallSpace></SmallSpace>
        <ParagraphText>{textItem}</ParagraphText>
    </BetaWrapper>
);

export default BetaBanner;
