import React from "react";
import { Heading, DarkText, CenterBlock, SmallSpace, MediumSpace, LargeSpace } from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
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
            <MediumSpace />
            <CenterBlock>
                <StyledButton kind="primary">{textItems.loginButton}</StyledButton>
                <SmallSpace />
                <Link to="/search">
                    <StyledButton kind="secondary">{textItems.continueButton}</StyledButton>
                </Link>
            </CenterBlock>
            <LargeSpace />
        </DarkText>
    </CenterBlock>
);

export default Login;
