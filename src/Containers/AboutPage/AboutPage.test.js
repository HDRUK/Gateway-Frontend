import React from "react";
import { create } from "react-test-renderer";
import AboutPage from "./AboutPage.js";

describe("<AboutPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<AboutPage />);
    });

    it("should test the AboutPage Snapshot", () => {});
});
