import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading } from "../../styles/styles.js";
import { Header } from "carbon-components-react";

const text = {
    headerText: "Innovation Gateway"
};

const AppHeader = props => (
    <HeaderWrapper>
        <HeaderImage src={props.image} />
        <HeaderText>{text.headerText}</HeaderText>
    </HeaderWrapper>
);

AppHeader.propTypes = {
    image: PropTypes.string.isRequired
};

const HeaderWrapper = styled(Header)`
    background-color: #3c3c3b;
    color: white;
    height: 4rem;
`;

const HeaderImage = styled.img`
    display: inline-block;
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 12rem;
    vertical-align: middle;
`;

const HeaderText = styled(Heading)`
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 5rem;
`;

export default AppHeader;
