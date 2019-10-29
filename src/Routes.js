import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Containers/LandingContent/LandingContent";
import SearchPage from "./Containers/SearchPage/SearchPage";
import AboutPage from "./Containers/AboutPage/AboutPage";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
