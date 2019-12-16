import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading, DropdownFilter } from "../../styles/carbonComponents";
import { ResultsWrapper, SearchInfo, ResultsCounter, SortDiv, LabelText, FloatRight } from "../../styles/styles.js";
import SavedSearchCard from "../../components/savedSearchCard/savedSearchCard.js";

import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_SAVED_BY_USER_ID } from "../../queries/queries.js";

const mySearchesPageText = {
    errorMessage: "Unable to load searches",
    noResultsMessage: "No searches have been saved"
};

const MySearchesPage = () => {
    const appContext = useContext(AppContext);
    const userId = appContext.userId;
    const savedSearchesData = appContext.savedSearchesData;

    const sortItems = [
        {
            id: "newest",
            label: "Newest",
            default: true
        },
        {
            id: "oldest",
            label: "Oldest"
        }
    ];

    const [selectedSort, setSelectedSort] = useState(sortItems.find(item => item.default).id);

    const { data, loading, error, refetch } = useQuery(GET_SEARCH_SAVED_BY_USER_ID, {
        variables: {
            userId: userId,
            sortField: {
                applied: "created_on",
                value: selectedSort === "oldest" ? "DESC" : "ASC"
            }
        }
    });

    useEffect(() => {
        if (!loading && data && data.getSearchSavedByUserID.data) {
            appContext.insertSavedSearchesData(data.getSearchSavedByUserID.data);
        }
        // We don't want this effect to run everytime appContext is updated, therefore not including in dependencies.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, data]);

    useEffect(() => {
        refetch();
    });

    if (loading && !data) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }
    if (error) return <ResultsWrapper>{mySearchesPageText.errorMessage}</ResultsWrapper>;

    const results =
        savedSearchesData.data && savedSearchesData.data.length > 0 ? (
            savedSearchesData.data.map((search, i) => {
                return <SavedSearchCard key={`savedSearchCard-${i}`} savedSearchIndex={i} />;
            })
        ) : (
            <p>{mySearchesPageText.noResultsMessage}</p>
        );

    return (
        <div>
            <SearchInfo>
                {!loading && <ResultsCounter>You have {savedSearchesData.data.length} saved searches</ResultsCounter>}
                <SortDiv>
                    <FloatRight>
                        <LabelText>Sort by:</LabelText>
                        <DropdownFilter
                            id="sortSavedSearches"
                            label="Sort Saved Searches"
                            type="default"
                            items={sortItems}
                            initialSelectedItem={sortItems.find(item => item.id === selectedSort)}
                            onChange={e => setSelectedSort(e.selectedItem.id)}
                        />
                    </FloatRight>
                </SortDiv>
            </SearchInfo>
            <ResultsWrapper>
                {loading ? (
                    <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                ) : (
                    results
                )}
            </ResultsWrapper>
        </div>
    );
};

export default MySearchesPage;
