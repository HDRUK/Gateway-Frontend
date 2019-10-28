import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/">
                                    <PageWrapper>
                                        <LandingPage />
                                    </PageWrapper>
                                </Route>
                                <Route path="/search">
                                    <PageWrapper>
                                        <AppSideNav />
                                        <div>/search</div>
                                    </PageWrapper>
                                </Route>
                                <Route path="/my-searches">
                                    <PageWrapper>
                                        <AppSideNav />
                                        <div>/my-search</div>
                                    </PageWrapper>
                                </Route>
                                <Route path="/browse">
                                    <PageWrapper>
                                        <AppSideNav />
                                        <div>/browse</div>
                                    </PageWrapper>
                                </Route>
                                <Route path="/about">
                                    <PageWrapper>
                                        <AppSideNav />
                                        <div>/about</div>
                                    </PageWrapper>
                                </Route>
                                <Route path="/help">
                                    <PageWrapper>
                                        <AppSideNav />
                                        <div>/about</div>
                                    </PageWrapper>
                                </Route>
                            </Switch>
                        </BrowserRouter>
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

const PageWrapper = styled.div`
    position: relative;
    min-height: 50rem;
    overflow: hidden;
`;

export default App;
