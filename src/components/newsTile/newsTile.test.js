import React from "react";
import { create } from "react-test-renderer";
import NewsTile from "./NewsTile";

describe("<Login> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<NewsTile />);
    });

    it("should test the NewsTile Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });
});
