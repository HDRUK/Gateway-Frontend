import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import ErrorBoundary from "./HOC/ErrorBoundary/ErrorBoundary";
import StyleWrapper from "./HOC/StyleWrapper/StyleWrapper.js";

import LandingPage from "./Containers/LandingPage/LandingPage";
import InnovationPage from "./Containers/InnovationPage/InnovationPage";
import GuidelinesPage from "./Containers/GuidelinesPage/GuidelinesPage";
import Glossary from "./Containers/Glossary/Glossary";
import FAQPage from "./Containers/FAQPage/FAQPage";
import SearchPage from "./Containers/SearchPage/SearchPage";
import MySearchesPage from "./Containers/MySearchesPage/MySearchesPage";
// This route is not currently implemented
// import MyAccessRequestsPage from "./Containers/MyAccessRequestsPage/MyAccessRequestsPage";
import RequestPage from "./Containers/RequestPage/RequestPage";
import NotFound from "./Containers/NotFound/NotFound";
import DetailPage from "./Containers/DetailPage/DetailPage";

import Header from "./components/header/header";
import BetaBanner from "./components/betaBanner/betaBanner";
import BigHeader from "./components/bigHeader/bigHeader";
import Navigation from "./components/navigation/navigation.js";
import SearchHeader from "./components/searchHeader/searchHeader.js";
import Footer from "./components/footer/footer";
import MenuFilterWrapper from "./components/filters/menuFilterWrapper/menuFilterWrapper";
import Content from "./components/content/content";
import LoginCallback from "./components/loginCallback/loginCallback";

import { PageWrapper, AppWrapper } from "./styles/styles";

const App = () => {
    useEffect(() => {
        document.title =
            process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT !== "production"
                ? `${process.env.REACT_APP_ENVIRONMENT} - Health Data Gateway`
                : "Health Data Gateway";
    });
    return (
        <ErrorBoundary>
            <Apollo>
                <AppContext>
                    <StyleWrapper>
                        <AppWrapper>
                            <BrowserRouter>
                                <Route exact path="/" component={BigHeader} />
                                <Route path="/:path" component={Header} />
                                <Route path="/" component={BetaBanner} />
                                <Route path="/:path" component={SearchHeader} />
                                <Route path="/:path" component={Navigation} />
                                <PageWrapper>
                                    <Switch>
                                        <Route exact path="/">
                                            <Content>
                                                <LandingPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/search">
                                            <Content nav filter>
                                                <MenuFilterWrapper />
                                                <SearchPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/my-searches">
                                            <Content nav>
                                                <MySearchesPage />
                                            </Content>
                                        </Route>
                                        {/* This route is not currently implemented */}
                                        {/* <Route exact path="/my-requests">
                                            <Content nav>
                                                <MyAccessRequestsPage />
                                            </Content>
                                        </Route> */}
                                        <Route exact path="/innovation">
                                            <Content nav about>
                                                <InnovationPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/guidelines">
                                            <Content nav about>
                                                <GuidelinesPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/glossary">
                                            <Content nav about>
                                                <Glossary />
                                            </Content>
                                        </Route>
                                        <Route exact path="/faq">
                                            <Content nav about>
                                                <FAQPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/request-access/:id">
                                            <Content nav>
                                                <RequestPage />
                                            </Content>
                                        </Route>
                                        <Route exact path="/detail/:id">
                                            <Content nav>
                                                <DetailPage />
                                            </Content>
                                        </Route>
                                        <Route
                                            exact
                                            path="/logincallback/"
                                            render={props => <LoginCallback {...props} />}
                                        />
                                        <Route path="*">
                                            <Content nav>
                                                <NotFound />
                                            </Content>
                                        </Route>
                                    </Switch>
                                </PageWrapper>
                                <Footer />
                            </BrowserRouter>
                        </AppWrapper>
                    </StyleWrapper>
                </AppContext>
            </Apollo>
        </ErrorBoundary>
    );
};

export default App;
