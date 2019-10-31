import React from "react";
import { create } from "react-test-renderer";
import NewsTileGroup from "./newsTileGroup";
import { NewsTileItem } from "../../styles/styles.js";
import NewsTile from "../newsTile/newsTile";

describe("<NewsTileGroup> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<NewsTileGroup props={<NewsTile />} />);
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const newsTileItem = renderedOutput.findAllByType(NewsTileItem);
        const div = renderedOutput.findAllByType("div");

        expect(newsTileItem).toHaveLength(1);
        expect(div).toHaveLength(1);
    });
});
