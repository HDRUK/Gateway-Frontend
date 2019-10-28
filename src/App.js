import React from "react";
import styled from "styled-components";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import AppSideNav from "./components/appSideNav/appSideNav.js";
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

import GlobalStyle from "./styles/globalStyles.js";

import hdr_logo_white from "./assets/hdruk_logo_white.png";

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <AppContext>
                    <AppWrapper>
                        <GlobalStyle />
                        <Header image={hdr_logo_white} />
                        {/* <AppSideNav /> */}
                        <LandingPage />
                        <Footer image={hdr_logo_white} />
                    </AppWrapper>
                </AppContext>
            </Apollo>
        );
    }
}

const AppWrapper = styled.div`
    width: 66rem;
    margin: 0 auto 0;
`;

export default App;
