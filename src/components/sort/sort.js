import React from "react";
import { DropdownFilter } from "../../styles/carbonComponents.js";
import { LabelText, FloatRight } from "../../styles/styles.js";

const sortText = { labelText: "Sort by:" };
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
            <LabelText>{sortText.labelText}</LabelText>
            <DropdownFilter id="sort" label="sort" type="default" items={items} initialSelectedItem={items[0]} />
        </FloatRight>
    );
};

export default Sort;
