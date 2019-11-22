import React from "react";
import PropTypes from "prop-types";
import { Line, SmallHeading, SmallText, Card } from "../../styles/styles.js";
import { Tag } from "carbon-components-react";
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
                <SmallHeading>{props.title}</SmallHeading>
                {props.filters && props.filters.length > 0 && (
                    <SavedSearchTable>
                        <thead>
                            <th>Filters applied</th>
                        </thead>
                        <tbody>
                            <td>
                                {props.filters.map(filter => (
                                    <Tag type="gray">{filter.value}</Tag>
                                ))}
                            </td>
                        </tbody>
                    </SavedSearchTable>
                )}
            </ContentDiv>
            <ButtonDiv>
                <SavedSearchButton kind="secondary" size="small" disabled={true}>
                    Delete Search
                </SavedSearchButton>
                <Link to={`/search`} onClick={props.runSearch}>
                    <SavedSearchButton size="small">Run Search</SavedSearchButton>
                </Link>
            </ButtonDiv>
        </Card>
    );
};

SavedSearchCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filters: PropTypes.array,
    resultsCount: PropTypes.number
};

export default SavedSearchCard;
