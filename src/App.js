import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import AppSideNav from "./components/appSideNav/appSideNav.js";
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import { SideStripeLeft, SideStripeRight } from "./styles/styles.js";

import GlobalStyle from "./styles/globalStyles.js";

import hdr_logo_white from "./assets/hdruk_logo_white.png";

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <AppContext>
                    <AppWrapper>
                        <BrowserRouter>
                            <GlobalStyle />
                            <Header image={hdr_logo_white} />
                            <PageWrapper>
                                <Switch>
                                    <Route exact path="/">
                                        <ContentWrapper>
                                            <LandingPage />
                                        </ContentWrapper>
                                    </Route>
                                    <Route path="/search">
                                        <ContentWrapper nav>
                                            <div>/search</div>
                                        </ContentWrapper>
                                    </Route>
                                    <Route path="/my-searches">
                                        <ContentWrapper nav>
                                            <div>/my-search</div>
                                        </ContentWrapper>
                                    </Route>
                                    <Route path="/browse">
                                        <ContentWrapper nav>
                                            <div>/browse</div>
                                        </ContentWrapper>
                                    </Route>
                                    <Route path="/about">
                                        <ContentWrapper nav>
                                            <div>/about</div>
                                        </ContentWrapper>
                                    </Route>
                                    <Route path="/help">
                                        <ContentWrapper nav>
                                            <div>/help</div>
                                        </ContentWrapper>
                                    </Route>
                                </Switch>
                            </PageWrapper>

                            <Footer image={hdr_logo_white} />
                        </BrowserRouter>
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
    overflow: hidden;
`;

const ContentDiv = styled.div`
    position: relative;
    padding: 4rem 4rem 4rem 4rem;
    background-color: #ffffff;
    display: inline-block;
    width: ${p => (p.nav ? "calc(100% - 16rem)" : "100%")};
    left: ${p => (p.nav ? "16rem" : "0")};
    min-height: 40rem;
    vertical-align: top;
`;

const ContentWrapper = props => (
    <PageWrapper>
        {props.nav && <AppSideNav />}
        <ContentDiv nav={props.nav}>
            <SideStripeLeft />
            <SideStripeRight />
            {props.children}
        </ContentDiv>
    </PageWrapper>
);

ContentWrapper.propTypes = {
    nav: PropTypes.bool,
    children: PropTypes.node
};

export default App;
