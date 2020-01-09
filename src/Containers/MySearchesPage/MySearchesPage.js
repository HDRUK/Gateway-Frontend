import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading, DropdownFilter, ParagraphBullets } from "../../styles/carbonComponents";
import {
    SearchInfo,
    ResultsCounter,
    SortDiv,
    LabelText,
    FloatRight,
    ParagraphText,
    DarkText,
    SmallSpace,
    NewListItem
} from "../../styles/styles.js";
import { SavedSearchesWrapper } from "./styles.js";
import SavedSearchCard from "../../components/savedSearchCard/savedSearchCard.js";

import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_SAVED_BY_USER_ID } from "../../queries/queries.js";

const mySearchesPageText = {
    errorMessage: "Unable to load searches",
    noResultsMessage: "Save your searches here to make finding essential datasets quicker.",
    noResultsP1: "How to save a search:",
    noResultsP1Bullet1: "Enter your search query into the search bar and click search or press enter;",
    noResultsP1Bullet2: "Apply any relevant filters to your search;",
    noResultsP1Bullet3: "Click ‘Save search’;",
    noResultsP1Bullet4: "Name your search so you can easily recognise it later;",
    noResultsP1Bullet5:
        "Next time you need to find similar datasets, navigate to the ‘Saved Searches’ tab to re-run the saved search"
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
                value: selectedSort === "newest" ? "DESC" : "ASC"
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
    if (error) return <SavedSearchesWrapper>{mySearchesPageText.errorMessage}</SavedSearchesWrapper>;

    const results =
        savedSearchesData.data && savedSearchesData.data.length > 0 ? (
            savedSearchesData.data.map((search, i) => {
                return <SavedSearchCard key={`savedSearchCard-${i}`} savedSearchIndex={i} />;
            })
        ) : (
            <DarkText>
                <ParagraphText>{mySearchesPageText.noResultsMessage}</ParagraphText>
                <SmallSpace />
                <ParagraphText>{mySearchesPageText.noResultsP1}</ParagraphText>
                <SmallSpace />
                <ParagraphBullets>
                    <NewListItem>{mySearchesPageText.noResultsP1Bullet1}</NewListItem>
                    <NewListItem>{mySearchesPageText.noResultsP1Bullet2}</NewListItem>
                    <NewListItem>{mySearchesPageText.noResultsP1Bullet3}</NewListItem>
                    <NewListItem>{mySearchesPageText.noResultsP1Bullet4}</NewListItem>
                    <NewListItem>{mySearchesPageText.noResultsP1Bullet5}</NewListItem>
                </ParagraphBullets>
                <SmallSpace />
            </DarkText>
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
            <SavedSearchesWrapper visible={data !== null}>
                {loading ? (
                    <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                ) : (
                    results
                )}
            </SavedSearchesWrapper>
        </div>
    );
};

export default MySearchesPage;
