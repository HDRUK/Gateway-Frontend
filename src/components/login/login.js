import { Font, StyledButton, Heading } from "../../styles/styles.js";
import React from "react";

const textItems = {
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => (
    <div>
        <Heading>{textItems.headingText}</Heading>
        <StyledButton>
            <Font>{textItems.loginButton}</Font>
        </StyledButton>
        <StyledButton kind="secondary">
            <Font>{textItems.continueButton}</Font>
        </StyledButton>
    </div>
);

export default Login;
