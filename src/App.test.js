import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import Header from "./components/header/header.js";
import Content from "./components/content/content.js";
import { PageWrapper, AppWrapper } from "./styles/styles.js";

import GlobalStyle from "./styles/globalStyles.js";

describe("<App> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<App />);
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const apollo = renderedOutput.findByType(Apollo);
        const appContext = apollo.findByType(AppContext);
        const appWrapper = appContext.findByType(AppWrapper);
        const browserRouter = appWrapper.findByType(BrowserRouter);
        browserRouter.findByType(GlobalStyle);
        browserRouter.findByType(Header);
        const pageWrapper = browserRouter.findByType(PageWrapper);
        const switches = pageWrapper.findByType(Switch);
        const routes = switches.findAllByType(Route);

        // QUESTION - because of switch only one route renders - how do we test others?

        //first route
        expect(routes[0].props.path).toBe("/");
        expect(routes[0].props.exact).toBe(true);
        const route1Content = routes[0].findByType(Content);
        route1Content.findByType(LandingPage);

        // //second route
        // expect(routes[1].props.path).toBe("/search");
        // const route2Content = routes[1].findByType(Content);
        // route2Content.findByType(SearchPage);

        // //third route
        // expect(routes[2].props.path).toBe("/my-searches");
        // const route3Content = routes[2].findByType(Content);
        // route3div = route3Content.findByType("div");
        // console.log(route3div.children[0]);

        // //fourth route
        // expect(routes[3].props.path).toBe("/browse");
        // const route4Content = routes[3].findByType(Content);
        // route4div = route4Content.findByType("div");

        // //fifth route
        // expect(routes[4].props.path).toBe("/about");
        // const route5Content = routes[4].findByType(Content);
        // route5Content.findByType(AboutPage);

        // //sixth route
        // expect(routes[5].props.path).toBe("/help");
        // const route6Content = routes[5].findByType(Content);
        // route6div = route6Content.findByType("div");
    });
});
