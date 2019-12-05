import React, { useContext } from "react";
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
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const textItems = {
    headingText: "Enter to access our datasets",
    loginButton: "Log in",
    logoutButton: "Log out",
    continueButton: "Continue without logging in",
    loggedInContinueButton: "Continue"
};

const Login = () => {
    const appContext = useContext(AppContext);
    return (
        <CenterBlock>
            <DarkText>
                <Heading>{textItems.headingText}</Heading>
                <MediumSpace />

                {appContext.authenticated === "true" ? (
                    <CenterBlock>
                        <a href="/logout">
                            <StyledButton kind="primary">{textItems.logoutButton}</StyledButton>
                        </a>
                        <SmallSpace />
                        <LinkNoDecoration to="/search">
                            <StyledButton kind="secondary">{textItems.loggedInContinueButton}</StyledButton>
                        </LinkNoDecoration>
                    </CenterBlock>
                ) : (
                    <CenterBlock>
                        <a href="/login">
                            <StyledButton kind="primary">{textItems.loginButton}</StyledButton>
                        </a>
                        <SmallSpace />
                        <LinkNoDecoration to="/search">
                            <StyledButton kind="secondary">{textItems.continueButton}</StyledButton>
                        </LinkNoDecoration>
                    </CenterBlock>
                )}

                <LargeSpace />
            </DarkText>
        </CenterBlock>
    );
};

export default Login;
