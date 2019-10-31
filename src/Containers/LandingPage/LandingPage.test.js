import React from "react";
import { create } from "react-test-renderer";
import LandingPage from "./LandingPage.js";
import { BrowserRouter } from "react-router-dom";

describe("<LandingPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
    });

    it("should test the LandingPage Snapshot", () => {});
});
