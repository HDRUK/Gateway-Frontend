import React from "react";
import styled from "styled-components";
import { InvertedHeaderHeading, Logo } from "../../styles/styles.js";
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

const HeaderImage = styled(Logo)`
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

export default AppHeader;
