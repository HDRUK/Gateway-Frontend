import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar, CenterLoading } from "../../styles/carbonComponents";
import { Bold, Line } from "../../styles/styles.js";
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

import { useLazyQuery } from "@apollo/react-hooks";
import { CATALOGUE_ITEMS_SEARCH } from "../../queries/queries.js";

const searchPageText = {
    search: "Search",
    results: "Results",
    searchTitle: "What health data do you need?"
};

const handleScroll = ({ currentTarget }, onLoadMore, offSet, setOffSet, dataLength, loading) => {
    if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight) {
        if (!loading && offSet <= dataLength) {
            onLoadMore(offSet);
            setOffSet(offSet + 10);
        }
    }
};

const resultsData = (searchTerm, data, offSet, setOffSet, dataLength, fetchMore, loading, error) => {
    const onLoadMore = offSet => {
        fetchMore({
            variables: { recordLimit: 10, recordOffset: offSet, searchTerm },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    hdrCatalogueItemsSearch: {
                        ...prev.hdrCatalogueItemsSearch,
                        data: [...fetchMoreResult.hdrCatalogueItemsSearch.data]
                    }
                });
            }
        });
    };

    if (loading && !data) {
        return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
    }
    if (error) return <div>{error.status} - Error :(</div>;

    const processedData = (data && data.data) || [];

    return (
        <SearchResultsWrapper onScroll={e => handleScroll(e, onLoadMore, offSet, setOffSet, dataLength, loading)}>
            {processedData.length > 0
                ? processedData.map((result, i) => (
                      <ResultCard key={`resultCard-${i}`} title={result.label} description={result.description} />
                  ))
                : !loading && <div>No results</div>}
            {loading && <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />}
        </SearchResultsWrapper>
    );
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

    const searchTerm = appContext.search.term;
    const searchData = appContext.searchData;
    const dataLength = searchData ? searchData.length : "0";
    const offSet = searchData.offSet;

    const clearSearchData = appContext.clearSearchData;
    const setOffSet = appContext.setOffSet;

    const [getItemsSearch, { error, loading, data, fetchMore, networkStatus }] = useLazyQuery(CATALOGUE_ITEMS_SEARCH);

    const onSearch = e => {
        if (e && e.key === "Enter" && e.target.value !== searchTerm) {
            returnSearchResults(e.target.value);
            clearSearchData();
            getItemsSearch({
                variables: { recordLimit: 10, recordOffset: 0, searchTerm: e.target.value },
                fetchPolicy: "cache-and-network",
                notifyOnNetworkStatusChange: true
            });
        }
    };

    useEffect(() => {
        if (!loading && data && data.hdrCatalogueItemsSearch.data) {
            appContext.insertSearchData(
                parseInt(data.hdrCatalogueItemsSearch.count, 10),
                data.hdrCatalogueItemsSearch.data
            );
        }
        // We don't want this effect to run everytime appContext is updated, therefore not including in dependencies.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, loading]);

    const joinedLoading =
        loading || networkStatus === 3 || (searchData.data.length < offSet && offSet < searchData.length);

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
                {resultsData(searchTerm, searchData, offSet, setOffSet, dataLength, fetchMore, joinedLoading, error)}
            </Results>
        </div>
    );
};

export default SearchPage;
