import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";

import AppContext from "./HOC/AppContext/AppContext.js";

import ErrorBoundary from "./HOC/ErrorBoundary/ErrorBoundary";

import LandingPage from "./Containers/LandingPage/LandingPage";
import InnovationPage from "./Containers/InnovationPage/InnovationPage";
import GuidelinesPage from "./Containers/GuidelinesPage/GuidelinesPage";
import SearchPage from "./Containers/SearchPage/SearchPage";
import MySearchesPage from "./Containers/MySearchesPage/MySearchesPage";
import NotFound from "./Containers/NotFound/NotFound";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuFilterWrapper from "./components/filters/menuFilterWrapper/menuFilterWrapper";
import Content from "./components/content/content";
import { PageWrapper, AppWrapper } from "./styles/styles";

import GlobalStyle from "./styles/globalStyles";
import DetailPage from "./Containers/DetailPage/DetailPage";
import LoginCallback from "./components/loginCallback/loginCallback";

const App = () => {
    return (
        <ErrorBoundary>
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
                                    <Route exact path="/innovation">
                                        <Content nav>
                                            <InnovationPage />
                                        </Content>
                                    </Route>
                                    <Route exact path="/guidelines">
                                        <Content nav>
                                            <GuidelinesPage />
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
                </AppContext>
            </Apollo>
        </ErrorBoundary>
    );
};

export default App;
