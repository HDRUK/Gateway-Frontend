import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading, DropdownFilter } from "../../styles/carbonComponents";
import {
    SearchInfo,
    ResultsCounter,
    SortDiv,
    LabelText,
    FloatRight,
    LinkNoDecoration,
    DarkText
} from "../../styles/styles.js";
import { SavedSearchesWrapper } from "./styles.js";
import ResultCard from "../../components/resultCard/resultCard.js";

const mySearchesPageText = {
    errorMessage: "Unable to load searches",
    noResultsMessage: "No searches have been saved"
};

const MyAccessRequestsPage = () => {
    const appContext = useContext(AppContext);
    const userId = appContext.userId;
    const accessRequests = appContext.accessRequests;
    const searchResultId = appContext.setSearchResultId;

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
    appContext.useGetAccessRequests(userId, selectedSort);

    // useEffect(() => {
    //     accessRequests.refetch !== null && accessRequests.refetch();
    // });

    useEffect(() => {
        accessRequests.data &&
            accessRequests.data.length > 0 &&
            accessRequests.data.map(search => {
                appContext.getDetailDataShort(search.dataModelId);
            });
    }, [accessRequests]);

    if (accessRequests.status === "loading" && accessRequests.data === {}) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }
    if (accessRequests.status === "error")
        return <SavedSearchesWrapper>{mySearchesPageText.errorMessage}</SavedSearchesWrapper>;

    return (
        <div>
            <SearchInfo>
                {!accessRequests.status === "loading" && (
                    <ResultsCounter>You have {accessRequests.data.length} saved searches</ResultsCounter>
                )}
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
            <SavedSearchesWrapper visible={accessRequests.data !== {}}>
                {accessRequests.status === "loading" ? (
                    <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                ) : appContext.detailShort !== [] ? (
                    appContext.detailShort.map((data, i) => {
                        return (
                            <LinkNoDecoration
                                key={`resultCard-${i}`}
                                to={`detail/${data.hdrDataModelID.data.id}`}
                                onClick={() => searchResultId(data.hdrDataModelID.data.id)}
                            >
                                <DarkText>
                                    <ResultCard
                                        key={`savedSearchCard-${i}`}
                                        savedSearchIndex={i}
                                        title={data.hdrDataModelID.data.title}
                                        detail={["Enquiry date", data.hdrDataModelID.data.createdOn]}
                                        description={data.hdrDataModelID.data.abstract}
                                    />
                                </DarkText>
                            </LinkNoDecoration>
                        );
                    })
                ) : (
                    <p>{mySearchesPageText.noResultsMessage}</p>
                )}
            </SavedSearchesWrapper>
        </div>
    );
};

export default MyAccessRequestsPage;
