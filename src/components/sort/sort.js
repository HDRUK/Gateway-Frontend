import React from "react";
import { DropdownFilter } from "../../styles/carbonComponents.js";
import { LabelText, FloatRight } from "../../styles/styles.js";

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
const Sort = () => {
    return (
        <FloatRight>
            <LabelText>Sort by:</LabelText>
            <DropdownFilter
                label="dropdown"
                id="dropdown"
                type="default"
                items={items}
                initialSelectedItem={items[0]}
            />
        </FloatRight>
    );
};

export default Sort;
