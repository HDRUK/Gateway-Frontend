import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

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

const heading = number => {
    if (number) {
        return {
            headingText: `Enter to discover our ${number} datasets`
        };
    }
    return {
        headingText: `Enter to discover our datasets`
    };
};

const textItems = {
    loginButton: "Log in",
    logoutButton: "Log out",
    continueButton: "Continue without logging in",
    loggedInContinueButton: "Continue"
};
const Login = () => {
    const appContext = useContext(AppContext);
    appContext.useDatasetCount();
    const datasetCount = appContext.state.datasetCount;

    return (
        <CenterBlock>
            <DarkText>
                <Heading>{heading(datasetCount).headingText}</Heading>
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
