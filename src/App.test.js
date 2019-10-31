import React from "react";
import { create } from "react-test-renderer";
import App from "./App";
import Apollo from "./HOC/Apollo/Apollo.js";

describe("<App> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<App />);
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const search = renderedOutput.findAllByType(Apollo);

        expect(search).toHaveLength(1);
    });
});
