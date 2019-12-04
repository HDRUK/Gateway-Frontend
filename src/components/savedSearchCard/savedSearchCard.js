import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { Link } from "react-router-dom";
import { Tag, Modal } from "carbon-components-react";
import { CenterLoading } from "../../styles/carbonComponents.js";
import { Card } from "../../styles/styles.js";
import { ContentDiv, ButtonDiv, SavedSearchButton, SavedSearchTitle, CardLoadingBox } from "./styles.js";
import LabeledContent from "../../components/labeledContent/labeledContent.js";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_SAVED_SEARCH } from "../../queries/queries.js";

const textItems = {
    delete: "Delete",
    cancel: "Cancel",
    deleteSearch: "Delete Search",
    deleteSearchConfirmation: "Are you sure you want to delete this search?",
    runSearch: "Run Search",
    searchDate: "Search Date",
    results: "Results"
};

const SavedSearchCard = props => {
    const appContext = useContext(AppContext);
    const runSearch = appContext.returnSearchResults;
    const searchesData = appContext.savedSearchesData.data && appContext.savedSearchesData.data[props.savedSearchIndex];
    const removeSavedSearchData = appContext.removeSavedSearchData;
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [deleteSearchQuery, { error, loading, data }] = useMutation(DELETE_SAVED_SEARCH);

    const confirmDelete = async id => {
        deleteSearchQuery({ variables: { ID: id } });
        removeSavedSearchData(id);
    };

    // console.log("stuff", error, loading, searchesData, data);

    return (
        <Card>
            {/* TODO: Use inline loading on the delete button, styling from save search button */}
            {loading && (
                <CardLoadingBox>
                    <CenterLoading withOverlay={false} />
                </CardLoadingBox>
            )}
            <Modal
                kind="secondary"
                danger={true}
                primaryButtonText={textItems.delete}
                open={deleteModalStatus}
                shouldSubmitOnEnter={true}
                hasScrollingContent={false}
                modalHeading={searchesData.name || searchesData.detail}
                modalLabel={textItems.deleteSearch}
                aria-label="A label to be read by screen readers on the modal root node"
                secondaryButtonText={textItems.cancel}
                onBlur={() => setDeleteModalStatus(false)}
                onRequestClose={() => setDeleteModalStatus(false)}
                onRequestSubmit={() => {
                    confirmDelete(searchesData.id);
                    setDeleteModalStatus(false);
                }}
                onSecondarySubmit={() => setDeleteModalStatus(false)}
            >
                <p>{textItems.deleteSearchConfirmation}</p>
            </Modal>
            <ContentDiv>
                <LabeledContent label={textItems.searchDate}>{searchesData.createdOn}</LabeledContent>
                <LabeledContent label={textItems.results}>{searchesData.resultsCount || "n/a"}</LabeledContent>
                <SavedSearchTitle>{searchesData.name || searchesData.detail}</SavedSearchTitle>
                {!searchesData.name && searchesData.filters && searchesData.filters.length > 0 && (
                    <LabeledContent lowercase label="Filters applied">
                        {searchesData.filters.map((filter, i) => (
                            <Tag key={`filter-tag-${i}`} type="gray">
                                {filter.value}
                            </Tag>
                        ))}
                    </LabeledContent>
                )}
            </ContentDiv>
            <ButtonDiv>
                {/* TODO: Replace delete button styling with styling from save search button */}
                <SavedSearchButton kind="tertiary" size="small" onClick={() => setDeleteModalStatus(true)}>
                    {textItems.deleteSearch}
                </SavedSearchButton>
                <Link to={`/search`} onClick={() => runSearch(searchesData.detail)}>
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
