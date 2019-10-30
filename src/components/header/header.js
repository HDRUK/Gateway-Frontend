import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InvertedParagraphHeading } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

const text = {
    headerText: "Innovation Gateway"
};

const AppHeader = props => (
    <HeaderWrapper aria-label="HDR UK Innovation Gateway">
        <Link to="/">
            <HeaderImage src={props.image} />
        </Link>
        <InvertedParagraphHeading>{text.headerText}</InvertedParagraphHeading>
    </HeaderWrapper>
);

AppHeader.propTypes = {
    image: PropTypes.string.isRequired
};

const HeaderImage = styled.img`
    display: inline-block;
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

export default AppHeader;
