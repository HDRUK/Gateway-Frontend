import React, { useContext } from "react";
import { Heading, DarkText, CenterBlock, SmallSpace, MediumSpace, LargeSpace } from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

import { AppContext } from "../../HOC/AppContext/AppContext";

const textItems = {
    headingText: "Log in to access our datasets",
    loginButton: "Log in",
    continueButton: "Continue without logging in"
};

const Login = () => {
    const appcontext = useContext(AppContext);
    // const loginUser = appcontext.loginUser;

    return (
        <CenterBlock>
            <DarkText>
                <Heading>{textItems.headingText}</Heading>
                <MediumSpace />
                <CenterBlock>
                    <StyledButton kind="primary" onClick={appcontext.loginUser}>
                        {textItems.loginButton}
                    </StyledButton>
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
