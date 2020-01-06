import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

import { Heading, CenterBlock, TinySpace, SmallSpace, LinkNoDecoration, LinkText } from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
import { LoginWrapper } from "./styles";

const heading = number => {
    if (number) {
        return {
            headingText: `Explore & Discover our ${number} health datasets from across the UK.`
        };
    }
    return {
        headingText: `Explore & Discover our health datasets from across the UK.`
    };
};

const textItems = {
    loginButton: "Login via OpenAthens",
    logoutButton: "Logout",
    continueButton: "Continue as a guest",
    loggedInContinueButton: "Continue",
    description:
        "Log in to view and enquire about access to health datasets. If you continue without logging in, you can search and explore information about these datasets."
};

const Login = () => {
    const appContext = useContext(AppContext);
    appContext.useDatasetCount();
    const datasetCount = appContext.state.datasetCount;

    return (
        <CenterBlock>
            <LoginWrapper>
                <Heading>{heading(datasetCount).headingText}</Heading>
                <TinySpace />
                <CenterBlock>
                    <p>{textItems.description}</p>
                </CenterBlock>
                <TinySpace />
                <CenterBlock>
                    <LinkNoDecoration to="/innovation">
                        <StyledButton kind="secondary">
                            {appContext.authenticated ? textItems.loggedInContinueButton : textItems.continueButton}
                        </StyledButton>
                    </LinkNoDecoration>
                    <SmallSpace />
                    {appContext.authenticated ? (
                        <LinkText href="/logout">
                            <StyledButton kind="primary">{textItems.logoutButton}</StyledButton>
                        </LinkText>
                    ) : (
                        <LinkText href="/login">
                            <StyledButton kind="primary">{textItems.loginButton}</StyledButton>
                        </LinkText>
                    )}
                </CenterBlock>
            </LoginWrapper>
        </CenterBlock>
    );
};

export default Login;
