import React from "react";
import { CheckboxItem } from "../../../styles/carbonComponents.js";

import PropTypes from "prop-types";

const Filter = props => {
    return <CheckboxItem id={props.title} labelText={props.title} onChange={props.onChange} checked={props.checked} />;
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default Filter;
