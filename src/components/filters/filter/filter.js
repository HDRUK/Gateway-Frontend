import React, { useContext } from "react";
import { CheckboxItem } from "../../../styles/carbonComponents.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";

const Filter = () => {
    const appContext = useContext(AppContext);

    return (
        <CheckboxItem
            onChange={(value, id) => (value ? appContext.addFilter(id) : appContext.removeFilter(id))}
            id={appContext.filterHeadings[0]}
            labelText={appContext.filterHeadings[0]}
        ></CheckboxItem>
    );
};

export default Filter;
