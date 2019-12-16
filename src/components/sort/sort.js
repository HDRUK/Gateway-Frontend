import React, { useContext } from "react";
import { DropdownFilter } from "../../styles/carbonComponents.js";
import { LabelText, FloatRight } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const textItems = { labelText: "Sort by:" };
const Sort = () => {
    const appContext = useContext(AppContext);
    const sortItems = appContext.sortItems;
    const currentSelectedSort =
        appContext.selectedSort.current || appContext.sortItems.find(sortItem => sortItem.default).id;

    const handleChange = event => {
        appContext.setSelectedSort({
            current: event.selectedItem.id,
            previous: currentSelectedSort
        });
    };

    return (
        <FloatRight>
            <LabelText>{textItems.labelText}</LabelText>
            <DropdownFilter
                id="sort"
                label="sort"
                type="default"
                items={sortItems}
                initialSelectedItem={sortItems.find(item => item.id === currentSelectedSort)}
                onChange={e => handleChange(e)}
            />
        </FloatRight>
    );
};

export default Sort;
