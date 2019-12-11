import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar, CenterLoading } from "../../styles/carbonComponents";
import { Bold, Line, LinkNoDecoration, DarkText } from "../../styles/styles.js";
import {
    SearchHeading,
    SearchBarWrapper,
    Results,
    SearchInfo,
    ResultsCounter,
    SortDiv,
    SearchResultsWrapper
} from "./styles.js";
import Sort from "../../components/sort/sort.js";
import ResultCard from "../../components/resultCard/resultCard.js";

import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { CUSTOM_SEARCH } from "../../queries/queries.js";
import { SEARCH_AUDIT_LOG_SAVE } from "../../queries/queries.js";

const searchPageText = {
    search: "Search",
    results: "Results",
    searchTitle: "What health data do you need?",
    error: {
        queryError: "Something went wrong. Please try again."
    }
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
    if (error) return <SearchResultsWrapper>{searchPageText.error.queryError}</SearchResultsWrapper>;

    const processedData = (data && data.data) || [];

    return (
        <SearchResultsWrapper onScroll={e => handleScroll(e, onLoadMore, offSet, setOffSet, dataLength, loading)}>
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
                                      publisher={result.publisher || "Not specified"}
                                      description={result.abstract || "Description unknown"}
                                  />
                              </DarkText>
                          </LinkNoDecoration>
                      );
                  })
                : !loading && <div>No results</div>}
            {loading && <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />}
        </SearchResultsWrapper>
    );
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

    const searchResultId = appContext.setSearchResultId;
    const searchTerm = appContext.search.term;
    const previousTerm = appContext.search.previousTerm;
    const searchData = appContext.searchData;
    const dataLength = searchData ? searchData.length : "0";
    const offSet = searchData.offSet;
    const limit = appContext.state.resultsLimit;
    const filterString = appContext.filterString;

    const clearSearchData = appContext.clearSearchData;
    const setOffSet = appContext.setOffSet;

    const [getItemsSearch, { error, loading, data, fetchMore, networkStatus }] = useLazyQuery(CUSTOM_SEARCH);
    const [searchAuditLogSave] = useMutation(SEARCH_AUDIT_LOG_SAVE, {
        onCompleted: data => {
            appContext.updateSearchAuditLogId(data.searchAuditLogSave.data.id);
        }
    });

    const onSearch = e => {
        if (e && e.key === "Enter" && e.target.value !== searchTerm) {
            // TODO: Add filters to the audit log save
            // TODO: Implement sort functionality
            searchAuditLogSave({
                variables: {
                    userId: appContext.userId,
                    searchTerm: e.target.value,
                    endPoint: "",
                    offSet: 0,
                    recordLimit: limit,
                    sort: { applied: "Alphabetical", value: "Up" },
                    filters: null
                }
            });
            returnSearchResults(e.target.value, false);
            clearSearchData();
        }
    };

    const formatFilterObjectForSave = filterObject => {
        let finalArray = [];
        Object.keys(filterObject)
            .map(filterIndex => {
                return Object.keys(filterObject[filterIndex])
                    .filter(valueIndex => filterObject[filterIndex][valueIndex].applied)
                    .map(valueIndex => ({
                        type: filterIndex,
                        value: filterObject[filterIndex][valueIndex].value
                    }));
            })
            .forEach(array => (finalArray = [...finalArray, ...array]));
        return finalArray;
    };

    useEffect(() => {
        if (searchTerm !== null) {
            if (searchTerm !== previousTerm) {
                appContext.setSearch({
                    ...appContext.search,
                    previousTerm: searchTerm
                });

                getItemsSearch({
                    variables: { recordLimit: limit, recordOffset: 0, searchTerm: searchTerm },
                    fetchPolicy: "cache-and-network",
                    notifyOnNetworkStatusChange: true
                });
            } else if (filterString !== null && filterString !== appContext.prevFilterString) {
                appContext.setPrevFilterString(filterString);
                clearSearchData();
                searchAuditLogSave({
                    variables: {
                        userId: appContext.userId,
                        searchTerm: searchTerm,
                        endPoint: "",
                        offSet: 0,
                        recordLimit: limit,
                        sort: { applied: "Alphabetical", value: "Up" },
                        filters: formatFilterObjectForSave(appContext.filterObject)
                    }
                });
                getItemsSearch({
                    variables: {
                        recordLimit: limit,
                        recordOffset: 0,
                        searchTerm: searchTerm,
                        filterItems: [filterString]
                    },
                    fetchPolicy: "cache-and-network",
                    notifyOnNetworkStatusChange: true
                });
            }
            if (!error && !loading && !data && searchData.length === 0) {
                getItemsSearch({
                    variables: { recordLimit: limit, recordOffset: 0, searchTerm: searchTerm },
                    fetchPolicy: "cache-and-network",
                    notifyOnNetworkStatusChange: true
                });
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
        <div>
            <SearchHeading invisible={pageState}>{searchPageText.searchTitle}</SearchHeading>
            <SearchBarWrapper main={!pageState}>
                <SearchBar defaultValue={searchTerm} labelText={searchPageText.search} onKeyPress={onSearch} />
            </SearchBarWrapper>
            <Results invisible={!pageState}>
                <SearchInfo>
                    <Line />
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
        </div>
    );
};

export default SearchPage;
