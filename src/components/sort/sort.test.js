import React from "react";
import { create } from "react-test-renderer";
import Sort from "./sort.js";
import { DropdownFilter } from "../../styles/carbonComponents.js";
import { LabelText, FloatRight } from "../../styles/styles.js";

describe("<Sort> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<Sort />);
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should render the float item", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            expect(float).toHaveLength(1);
        });

        it("should render the dropdown item", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            const dropdown = float[0].findAllByType(DropdownFilter);
            expect(dropdown).toHaveLength(1);
            expect(dropdown[0].children[0].props["label"]).toBe("dropdown");
        });

        it("should render the label item", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            const text = float[0].findAllByType(LabelText);
            expect(text).toHaveLength(1);
        });
    });
});
