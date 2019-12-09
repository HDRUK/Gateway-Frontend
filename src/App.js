import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";

import AppContext from "./HOC/AppContext/AppContext.js";

import ErrorBoundary from "./HOC/ErrorBoundary/ErrorBoundary";

import LandingPage from "./Containers/LandingPage/LandingPage.js";
import AboutPage from "./Containers/AboutPage/AboutPage.js";
import SearchPage from "./Containers/SearchPage/SearchPage.js";
import MySearchesPage from "./Containers/MySearchesPage/MySearchesPage.js";

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import MenuFilterWrapper from "./components/filters/menuFilterWrapper/menuFilterWrapper.js";
import Content from "./components/content/content.js";
import { PageWrapper, AppWrapper } from "./styles/styles.js";

import GlobalStyle from "./styles/globalStyles.js";
import DetailPage from "./Containers/DetailPage/DetailPage.js";
import LoginCallback from "./components/loginCallback/loginCallback.js";

const App = () => {
    return (
        <Apollo>
            <AppContext>
                <AppWrapper>
                    <BrowserRouter>
                        <GlobalStyle />
                        <Header />
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
                                <Route exact path="/browse">
                                    <Content nav>
                                        <div>/browse</div>
                                    </Content>
                                </Route>
                                <Route exact path="/about">
                                    <Content nav>
                                        <AboutPage />
                                    </Content>
                                </Route>
                                <Route exact path="/help">
                                    <Content nav>
                                        <div>/help</div>
                                    </Content>
                                </Route>
                                <Route exact path="/detail/:id">
                                    <Content nav>
                                        <DetailPage />
                                    </Content>
                                </Route>
                                <Route exact path="/logincallback/" render={props => <LoginCallback {...props} />} />
                                <Route path="*">
                                    <Content nav>
                                        <DetailPage />
                                    </Content>
                                </Route>
                            </Switch>
                        </PageWrapper>
                        <Footer />
                    </BrowserRouter>
                </AppWrapper>
            </AppContext>
        </Apollo>
    );
};

export default App;
