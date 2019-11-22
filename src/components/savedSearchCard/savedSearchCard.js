import React from "react";
import PropTypes from "prop-types";
import { Line, SmallHeading, SmallText, Card, Preview } from "../../styles/styles.js";
import {} from "./styles.js";

const SavedSearchCard = props => {
    return (
        <Card>
            <SmallHeading>{props.date}</SmallHeading>
            <Preview>
                <SmallHeading>{props.title}</SmallHeading>
            </Preview>
        </Card>
    );
};

SavedSearchCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    resultsCount: PropTypes.number
};

export default SavedSearchCard;
