import React from "react";
import PropTypes from "prop-types";
import { Line, SmallHeading, SmallText, Card, Preview } from "../../styles/styles.js";
// import { Button } from "carbon-components-react";
import { ContentDiv, ButtonDiv, SavedSearchButton, SavedSearchTable } from "./styles.js";
import { Link } from "react-router-dom";
// TODO: Remove disable from delete button when delete functionality implemented

const SavedSearchCard = props => {
    return (
        <Card>
            <ContentDiv>
                <SavedSearchTable>
                    <thead>
                        <th>Search Date</th>
                        <th>Results</th>
                    </thead>
                    <tbody>
                        <td>{props.date}</td>
                        <td>{props.resultsCount || "n/a"}</td>
                    </tbody>
                </SavedSearchTable>
                <Preview>
                    <SmallHeading>{props.title}</SmallHeading>
                </Preview>
            </ContentDiv>
            <ButtonDiv>
                <SavedSearchButton kind="secondary" size="small" disabled={true}>
                    Delete Search
                </SavedSearchButton>
                <Link to={`/search`}>
                    <SavedSearchButton size="small">Run Search</SavedSearchButton>
                </Link>
            </ButtonDiv>
        </Card>
    );
};

SavedSearchCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    resultsCount: PropTypes.number
};

export default SavedSearchCard;
