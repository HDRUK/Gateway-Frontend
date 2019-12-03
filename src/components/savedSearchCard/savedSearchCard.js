import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { Link } from "react-router-dom";
import { Tag } from "carbon-components-react";
import { Card } from "../../styles/styles.js";
import { ContentDiv, ButtonDiv, SavedSearchButton, SavedSearchTitle } from "./styles.js";
import LabeledContent from "../../components/labeledContent/labeledContent.js";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_SAVED_SEARCH } from "../../queries/queries.js";

// TODO: Remove disable from delete button when delete functionality implemented

const textItems = {
    deleteSearch: "Delete Search",
    runSearch: "Run Search"
};

const SavedSearchCard = props => {
    const appContext = useContext(AppContext);
    const runSearch = appContext.returnSearchResults;
    const data = appContext.savedSearchesData.data && appContext.savedSearchesData.data[props.savedSearchIndex];

    const [deleteSearchQuery, { error, loading }] = useMutation(DELETE_SAVED_SEARCH);

    const confirmDelete = id => {
        console.log("id", id);
        deleteSearchQuery({ variables: { ID: id } });
    };

    console.log("stuff", error, loading, data);

    return (
        <Card>
            <ContentDiv>
                <LabeledContent label="Search Date">{data.createdOn}</LabeledContent>
                <LabeledContent label="Results">{data.resultsCount || "n/a"}</LabeledContent>
                <SavedSearchTitle>{data.detail}</SavedSearchTitle>
                {data.filters && data.filters.length > 0 && (
                    <LabeledContent lowercase label="Filters applied">
                        {data.filters.map((filter, i) => (
                            <Tag key={`filter-tag-${i}`} type="gray">
                                {filter.value}
                            </Tag>
                        ))}
                    </LabeledContent>
                )}
            </ContentDiv>
            <ButtonDiv>
                <SavedSearchButton kind="secondary" size="small" onClick={() => confirmDelete(data.id)}>
                    {textItems.deleteSearch}
                </SavedSearchButton>
                <Link to={`/search`} onClick={() => runSearch(data.detail)}>
                    <SavedSearchButton kind="primary" size="small">
                        {textItems.runSearch}
                    </SavedSearchButton>
                </Link>
            </ButtonDiv>
        </Card>
    );
};

SavedSearchCard.propTypes = {
    savedSearchIndex: PropTypes.number.isRequired
};

export default SavedSearchCard;
