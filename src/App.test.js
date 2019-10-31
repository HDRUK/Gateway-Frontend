import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import AboutPage from "./Containers/AboutPage/AboutPage.js";
import SearchPage from "./Containers/SearchPage/SearchPage.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
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
        const apollo = renderedOutput.findAllByType(Apollo);
        const appContext = renderedOutput.findAllByType(AppContext);
        const appWrapper = renderedOutput.findAllByType(AppWrapper);
        const browserRouter = renderedOutput.findAllByType(BrowserRouter);
        const globalStyle = renderedOutput.findAllByType(GlobalStyle);
        const header = renderedOutput.findAllByType(Header);
        const pageWrapper = renderedOutput.findAllByType(PageWrapper);
        const switches = renderedOutput.findAllByType(Switch);

        expect(apollo).toHaveLength(1);
        expect(appContext).toHaveLength(1);
        expect(appWrapper).toHaveLength(1);
        expect(browserRouter).toHaveLength(1);
        expect(globalStyle).toHaveLength(1);
        expect(header).toHaveLength(1);
        expect(pageWrapper).toHaveLength(1);
        expect(switches).toHaveLength(1);
    });
});
