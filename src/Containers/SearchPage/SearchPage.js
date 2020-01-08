import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { CenterLoading } from "../../styles/carbonComponents";
import {
    Bold,
    LinkNoDecoration,
    DarkText,
    SearchInfo,
    SortDiv,
    ResultsCounter,
    ParagraphText,
    SmallSpace,
    NewListItem
} from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

import { Results, SearchResultsWrapper } from "./styles.js";
import Sort from "../../components/sort/sort.js";
import ResultCard from "../../components/resultCard/resultCard.js";

import { useLazyQuery } from "@apollo/react-hooks";
import { CUSTOM_SEARCH } from "../../queries/queries.js";

const searchPageText = {
    search: "Search",
    results: "Results",
    searchTitle: "What health data do you need?",
    error: {
        queryError: "Something went wrong. Please try again."
    }
};

const noResultContent = {
    message: "Sorry we couldn’t find any datasets matching ",
    tipsText: "Search Tips:",
    tipsBullet1: "Check your spelling and try again",
    tipsBullet2: `Use alternative search terms, for example, “child health” instead of “paediatrics”`,
    tipsBullet3: "Keep your search terms - the search service works best with shorter descriptions",
    tipsBullet4: "Found something wrong? Contact us on ",
    tipsBullet4LinkText: "support@healthdatagateway.org"
};

const handleScroll = ({ currentTarget }, onLoadMore, offSet, setOffSet, dataLength, loading) => {
    if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight) {
        if (!loading && offSet <= dataLength) {
            onLoadMore(offSet + 10);
            setOffSet(offSet + 10);
        }
    }
};

const resultsData = (
    searchTerm,
    data,
    limit,
    offSet,
    setOffSet,
    dataLength,
    fetchMore,
    loading,
    error,
    searchResultId
) => {
    const onLoadMore = offSet => {
        fetchMore({
            variables: { recordLimit: limit, recordOffset: offSet, searchTerm },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    hdrCustomSearch: {
                        ...prev.hdrCustomSearch,
                        data: [...prev.hdrCustomSearch.data, ...fetchMoreResult.hdrCustomSearch.data]
                    }
                });
            }
        });
    };

    if (loading && !data) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }

    if (error)
        return (
            <SearchResultsWrapper visible={searchTerm !== null}>{searchPageText.error.queryError}</SearchResultsWrapper>
        );

    const processedData = (data && data.data) || [];

    if (!loading && processedData.length === 0) {
        return (
            <div>
                <ParagraphText>
                    {noResultContent.message}
                    {searchTerm}
                </ParagraphText>
                <SmallSpace />
                <ParagraphText>{noResultContent.tipsText}</ParagraphText>
                <SmallSpace />
                <ParagraphBullets>
                    <NewListItem>{noResultContent.tipsBullet1}</NewListItem>
                    <NewListItem>{noResultContent.tipsBullet2}</NewListItem>
                    <NewListItem>{noResultContent.tipsBullet3}</NewListItem>
                    <NewListItem>
                        {noResultContent.tipsBullet4}
                        <a href="mailto:support@healthdatagateway.org" target="_top">
                            {noResultContent.tipsBullet4LinkText}
                        </a>
                    </NewListItem>
                </ParagraphBullets>
                <SmallSpace />
            </div>
        );
    }

    return (
        <SearchResultsWrapper
            visible={searchTerm !== null}
            onScroll={e => handleScroll(e, onLoadMore, offSet, setOffSet, dataLength, loading)}
        >
            {processedData.length > 0
                ? processedData.map((result, i) => {
                      return (
                          <LinkNoDecoration
                              key={`resultCard-${i}`}
                              to={`detail/${result.id}`}
                              onClick={() => searchResultId(result.id)}
                          >
                              <DarkText>
                                  <ResultCard
                                      title={result.title || "Title Unknown"}
                                      detail={["publisher", result.publisher || "Not specified"]}
                                      description={result.abstract || "Description unknown"}
                                  />
                              </DarkText>
                          </LinkNoDecoration>
                      );
                  })
                : loading && <div>Loading</div>}
            {loading && <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />}
        </SearchResultsWrapper>
    );
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const searchResultId = appContext.setSearchResultId;
    const searchTerm = appContext.search.term;
    const previousTerm = appContext.search.previousTerm;
    const searchData = appContext.searchData;
    const dataLength = searchData ? searchData.length : "0";
    const offSet = searchData.offSet;
    const limit = appContext.state.resultsLimit;
    const selectedSort = appContext.selectedSort;
    const filterString = appContext.filterString;
    const clearSearchData = appContext.clearSearchData;
    const setSearchSaved = appContext.setSearchSaved;
    const setOffSet = appContext.setOffSet;
    const searchAuditLogSave = appContext.searchAuditLogSave;
    const formatFilterObjectForSave = appContext.formatFilterObjectForSave;

    const [getItemsSearch, { error, loading, data, fetchMore, networkStatus }] = useLazyQuery(CUSTOM_SEARCH);

    const runGetItemsSearch = () => {
        getItemsSearch({
            variables: {
                recordLimit: limit,
                recordOffset: 0,
                searchTerm: searchTerm,
                filterItems: [filterString],
                sortField: selectedSort.current
            },
            fetchPolicy: "cache-and-network",
            notifyOnNetworkStatusChange: true
        });
    };

    useEffect(() => {
        if (searchTerm !== null) {
            if (searchTerm !== previousTerm) {
                // This is the inital search when use changes the search term
                appContext.setSearch({
                    ...appContext.search,
                    previousTerm: searchTerm
                });
                runGetItemsSearch();
            } else if (filterString !== null && filterString !== appContext.prevFilterString) {
                // This is run when the user applies a filter
                appContext.setPrevFilterString(filterString);
                clearSearchData();
                setSearchSaved(false);
                searchAuditLogSave({
                    variables: {
                        userId: appContext.userId,
                        searchTerm: searchTerm,
                        endPoint: "",
                        offSet: 0,
                        recordLimit: limit,
                        sort: { applied: selectedSort.current, value: "ASC" },
                        filters: formatFilterObjectForSave(appContext.filterObject)
                    }
                });
                runGetItemsSearch();
            } else if (!error && !loading && !data && searchData.length === 0) {
                // This is run when the user returns to this search having already run it once to refresh
                runGetItemsSearch();
            } else if (selectedSort.current !== selectedSort.previous) {
                // This is run when the user changes the selected sort field
                appContext.setSelectedSort({
                    current: selectedSort.current,
                    previous: selectedSort.current
                });
                clearSearchData();
                setSearchSaved(false);
                searchAuditLogSave({
                    variables: {
                        userId: appContext.userId,
                        searchTerm: searchTerm,
                        endPoint: "",
                        offSet: 0,
                        recordLimit: limit,
                        sort: { applied: selectedSort.current, value: "ASC" },
                        filters: formatFilterObjectForSave(appContext.filterObject)
                    }
                });
                runGetItemsSearch();
            }
        }
    });

    useEffect(() => {
        if (!loading && data && data.hdrCustomSearch.data) {
            appContext.insertSearchData(parseInt(data.hdrCustomSearch.count, 10), data.hdrCustomSearch.data);
        } else if (!loading && !data && searchTerm !== null) {
            appContext.setSearchData({
                ...searchData,
                length: 0,
                data: []
            });
        }
        // We don't want this effect to run everytime appContext is updated, therefore not including in dependencies.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, loading]);

    const joinedLoading =
        loading || networkStatus === 3 || (searchData.data.length === offSet && offSet < searchData.length);

    return (
        <Results invisible={!pageState}>
            <SearchInfo>
                <ResultsCounter>
                    <Bold>{dataLength}</Bold> {searchPageText.results}
                </ResultsCounter>
                <SortDiv>
                    <Sort />
                </SortDiv>
            </SearchInfo>
            {resultsData(
                searchTerm,
                searchData,
                limit,
                offSet,
                setOffSet,
                dataLength,
                fetchMore,
                joinedLoading,
                error,
                searchResultId
            )}
        </Results>
    );
};

export default SearchPage;
