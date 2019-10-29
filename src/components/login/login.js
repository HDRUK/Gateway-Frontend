import {
    StyledButton,
    Heading,
    DarkText,
    CenterBlock,
    SmallSpace,
    MediumSpace,
    LargeSpace
} from "../../styles/styles.js";
import React from "react";

import { Link } from "react-router-dom";

const textItems = {
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => (
    <CenterBlock>
        <DarkText>
            <Heading>{textItems.headingText}</Heading>
            <MediumSpace></MediumSpace>
            <CenterBlock>
                <StyledButton>{textItems.loginButton}</StyledButton>
                <SmallSpace></SmallSpace>
                <Link to="/search">
                    <StyledButton kind="secondary">{textItems.continueButton}</StyledButton>
                </Link>
            </CenterBlock>
            <LargeSpace></LargeSpace>
        </DarkText>
    </CenterBlock>
);

export default Login;
