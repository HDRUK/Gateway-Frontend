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
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => {
    const appContext = useContext(AppContext);
    return (
        <CenterBlock>
            <DarkText>
                <Heading>{textItems.headingText}</Heading>
                <MediumSpace />
                <CenterBlock>
                    {appContext.authenticated === "true" ? (
                        <a href="/logout">
                            <StyledButton kind="primary">Log out</StyledButton>
                        </a>
                    ) : (
                        <a href="/login">
                            <StyledButton kind="primary">Log in</StyledButton>
                        </a>
                    )}
                    <SmallSpace />
                    <LinkNoDecoration to="/search">
                        <StyledButton kind="secondary">{textItems.continueButton}</StyledButton>
                    </LinkNoDecoration>
                </CenterBlock>
                <LargeSpace />
            </DarkText>
        </CenterBlock>
    );
};

export default Login;
