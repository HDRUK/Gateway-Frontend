import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading } from "../../styles/styles.js";
import { Header } from "carbon-components-react";
import { Link } from "react-router-dom";

const text = {
    headerText: "Innovation Gateway"
};

const AppHeader = props => (
    <HeaderWrapper>
        <Link to="/">
            <HeaderImage src={props.image} />
        </Link>
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
    max-width: 100%;
    position: unset;
`;

const HeaderImage = styled.img`
    display: inline-block;
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

const HeaderText = styled(Heading)`
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 5rem;
`;

export default AppHeader;
