import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { Heading, DarkText, CenterBlock, SmallSpace, MediumSpace, LargeSpace } from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

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
    appContext.getDatasetCount();
    const datasetCount = appContext.state.datasetCount;

    return (
        <CenterBlock>
            <DarkText>
                <Heading>{heading(datasetCount).headingText}</Heading>
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
};

export default Login;
