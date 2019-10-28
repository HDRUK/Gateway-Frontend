import { Heading } from "../../styles/styles.js";
import React from "react";
import styled from "styled-components";

const text = {
    headerText: "Innovation Gateway"
};

const HeaderWrapper = styled.div`
    height: 4rem;
    line-height: 4rem;
    background-color: #3c3c3b;
    color: white;
`;

const HeaderImage = styled.img`
    display: inline-block;
    max-width: 5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

const HeaderText = styled(Heading)`
    height: 100%;
    display: inline-block;
    margin: 0;
    font-size: 1.5rem;
    vertical-align: top;
    line-height: 4rem;
`;

const Header = props => (
    <HeaderWrapper>
        <HeaderImage src={props.image} />
        <HeaderText>{text.headerText}</HeaderText>
    </HeaderWrapper>
);

export default Header;
