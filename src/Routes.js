import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Containers/LandingContent/LandingContent";
import SearchPage from "./Containers/SearchPage/SearchPage";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
