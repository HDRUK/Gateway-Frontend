import React from "react";
import { InvertedHeaderHeading, HeaderImage } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

const headerText = {
    header: "Innovation Gateway"
};

const AppHeader = () => (
    <HeaderWrapper aria-label="HDR UK Innovation Gateway">
        <Link to="/">
            <HeaderImage />
        </Link>
        <InvertedHeaderHeading>{headerText.header}</InvertedHeaderHeading>
    </HeaderWrapper>
);

export default AppHeader;
