import React, { useContext } from "react";
import { CheckboxItem } from "../../../styles/carbonComponents.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";

import PropTypes from "prop-types";

const Filter = props => {
    const appContext = useContext(AppContext);

    return (
        <CheckboxItem
            onChange={(value, id) => (value ? appContext.addFilter(id) : appContext.removeFilter(id))}
            id={props.title}
            labelText={props.title}
        ></CheckboxItem>
    );
};

Filter.propTypes = {
    title: PropTypes.string.isRequired
};

export default Filter;
