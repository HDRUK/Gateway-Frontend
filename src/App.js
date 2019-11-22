import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";

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

class App extends React.Component {
    render() {
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
                                    <Route path="/search">
                                        <Content nav filter>
                                            <MenuFilterWrapper />
                                            <SearchPage />
                                        </Content>
                                    </Route>
                                    <Route path="/my-searches">
                                        <Content nav>
                                            <MySearchesPage />
                                        </Content>
                                    </Route>
                                    <Route path="/browse">
                                        <Content nav>
                                            <div>/browse</div>
                                        </Content>
                                    </Route>
                                    <Route path="/about">
                                        <Content nav>
                                            <AboutPage />
                                        </Content>
                                    </Route>
                                    <Route path="/help">
                                        <Content nav>
                                            <div>/help</div>
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
    }
}

export default App;
