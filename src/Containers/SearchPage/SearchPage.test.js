import React from "react";
import { create } from "react-test-renderer";
import SearchPage from "./SearchPage.js";

describe("<SearchPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<SearchPage />);
    });

    it("should test the SearchPage Snapshot", () => {});
});
