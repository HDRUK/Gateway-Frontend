import React from "react";
import { create } from "react-test-renderer";
import DetailPage from "./DetailPage.js";

describe("<DetailPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<DetailPage />);
    });

    it("should test the AboutPage Snapshot", () => {});
});
