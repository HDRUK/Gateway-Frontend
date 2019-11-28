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

import { AppContext } from "../../HOC/AppContext/AppContext";

const textItems = {
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => {
    const appcontext = useContext(AppContext);
    const loginUser = appcontext.loginUser;

    return (
        <CenterBlock>
            <DarkText>
                <Heading>{textItems.headingText}</Heading>
                <MediumSpace />
                <CenterBlock>
                    <StyledButton kind="primary" onClick={loginUser}>
                        {textItems.loginButton}
                    </StyledButton>
                    <SmallSpace />
                    <a href="/login">Log in</a>
                    <a href="/logout">Log out</a>
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
