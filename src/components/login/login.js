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
    if (number !== null) {
        return {
            headingText: `Log in to access our ${number} datasets`
        };
    }
    return {
        headingText: `Log in to access our datasets`
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
    const loginUser = appContext.loginUser;

    return (
        <CenterBlock>
            <DarkText>
                <Heading>{heading(datasetCount).headingText}</Heading>
                <MediumSpace />
                <CenterBlock>
                    <StyledButton kind="primary" onClick={loginUser}>
                        {textItems.loginButton}
                    </StyledButton>
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
