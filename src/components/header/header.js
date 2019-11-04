import React from "react";
import { InvertedHeaderHeading, HeaderImage } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

const text = {
    headerText: "Innovation Gateway"
};

const AppHeader = () => (
    <HeaderWrapper aria-label="HDR UK Innovation Gateway">
        <Link to="/">
            <HeaderImage />
        </Link>
        <InvertedHeaderHeading>{text.headerText}</InvertedHeaderHeading>
    </HeaderWrapper>
);

export default AppHeader;
