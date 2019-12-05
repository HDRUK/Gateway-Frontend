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
            headingText: `Enter to access our ${number} datasets`
        };
    }
    return {
        headingText: `Enter to access our datasets`
    };
};

const textItems = {
    loginButton: "Log in",
    continueButton: "Continue without logging in"
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
