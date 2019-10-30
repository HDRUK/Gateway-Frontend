import React from "react";
import { NewsTileItem } from "../../styles/styles.js";
import PropTypes from "prop-types";

const NewsTileGroup = props => (
    <div>
        {props.children.map((newsTile, i) => (
            <NewsTileItem key={`newsTileItem-${i}`}>{newsTile}</NewsTileItem>
        ))}
    </div>
);

NewsTileGroup.propTypes = {
    children: PropTypes.node
};

export default NewsTileGroup;
