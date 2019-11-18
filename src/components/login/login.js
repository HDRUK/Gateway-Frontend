import React from "react";
import {
    Heading,
    DarkText,
    CenterBlock,
    SmallSpace,
    MediumSpace,
    LargeSpace,
    LinkNoDecoration
} from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
const textItems = {
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => (
    <CenterBlock>
        <DarkText>
            <Heading>{textItems.headingText}</Heading>
            <MediumSpace />
            <CenterBlock>
                <StyledButton kind="primary">{textItems.loginButton}</StyledButton>
                <SmallSpace />
                <LinkNoDecoration to="/search">
                    <StyledButton kind="secondary">{textItems.continueButton}</StyledButton>
                </LinkNoDecoration>
            </CenterBlock>
            <LargeSpace />
        </DarkText>
    </CenterBlock>
);

export default Login;
