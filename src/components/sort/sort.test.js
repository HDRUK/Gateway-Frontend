import React from "react";
import { create } from "react-test-renderer";
import Sort from "./sort.js";
import { DropdownFilter } from "../../styles/carbonComponents.js";
import { LabelText, FloatRight } from "../../styles/styles.js";

describe("<Sort> ", () => {
    let renderedComponent;
    let renderedOutput;
    const textItems = { labelText: "Sort by:" };
    const items = [
        {
            id: "first-item",
            label: "Item 1"
        },
        {
            id: "second-item",
            label: "Item 2"
        }
    ];

    beforeEach(() => {
        renderedComponent = create(<Sort />);
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should render the float item", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            expect(float).toHaveLength(1);
        });

        it("should render the dropdown component", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            const dropdown = float[0].findAllByType(DropdownFilter);
            expect(dropdown).toHaveLength(1);
            expect(dropdown[0].children[0].props["label"]).toBe("sort");
            expect(dropdown[0].children[0].props["type"]).toBe("default");
            expect(dropdown[0].children[0].props["id"]).toBe("sort");
            expect(dropdown[0].children[0].props["items"]).toMatchObject(items);
            expect(dropdown[0].children[0].props["initialSelectedItem"]).toMatchObject(items[0]);
        });

        it("should render the label item", () => {
            const float = renderedOutput.findAllByType(FloatRight);
            const labelText = float[0].findAllByType(LabelText);
            expect(labelText).toHaveLength(1);
            expect(labelText[0].props.children).toBe(textItems.labelText);
        });
    });
});
