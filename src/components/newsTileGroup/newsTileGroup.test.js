import React from "react";
import { create } from "react-test-renderer";
import NewsTileGroup from "./newsTileGroup";
import { NewsTileItem } from "../../styles/styles.js";

describe("<NewsTileGroup> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<NewsTileGroup />);
    });

    it("should test the NewsTileGroup Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct style elements are displayed", () => {
        const newsTileItem = renderedComponent.root.findAllByType(NewsTileItem);
        const div = renderedComponent.root.findAllByType("div");

        expect(newsTileItem).toHaveLength(1);
        expect(div).toHaveLength(1);
    });
});
