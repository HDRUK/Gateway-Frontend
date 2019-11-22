import React from "react";
import PropTypes from "prop-types";
import { SmallHeading, Card } from "../../styles/styles.js";
import { Tag } from "carbon-components-react";
import { ContentDiv, ButtonDiv, SavedSearchButton, SavedSearchTable } from "./styles.js";
import { Link } from "react-router-dom";
// TODO: Remove disable from delete button when delete functionality implemented
import LabeledContent from "../../components/labeledContent/labeledContent.js";

const SavedSearchCard = props => {
    return (
        <Card>
            <ContentDiv>
                <LabeledContent label="Search Date">{props.date}</LabeledContent>
                <LabeledContent label="Results">{props.resultsCount || "n/a"}</LabeledContent>
                <SmallHeading>{props.title}</SmallHeading>
                {props.filters && props.filters.length > 0 && (
                    <LabeledContent lowercase label="Filters applied">
                        {props.filters.map(filter => (
                            <Tag type="gray">{filter.value}</Tag>
                        ))}
                    </LabeledContent>
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
