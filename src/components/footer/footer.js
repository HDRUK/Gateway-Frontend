import { Font } from "../../styles/styles.js";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
    height: 12rem;
    background-color: rgb(60, 60, 59);
    color: white;
`;

const Header = () => (
    <FooterWrapper>
        <Font>
            <text>HDR</text>
        </Font>
    </FooterWrapper>
);

export default Header;
