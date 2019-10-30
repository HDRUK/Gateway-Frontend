import React from "react";
import { NewsTileItem } from "../../styles/styles.js";

const NewsTileGroup = props => (
    <div>
        {props.children.map((newsTile, i) => (
            <NewsTileItem key={`newsTileItem-${i}`}>{newsTile}</NewsTileItem>
        ))}
    </div>
);

export default NewsTileGroup;
