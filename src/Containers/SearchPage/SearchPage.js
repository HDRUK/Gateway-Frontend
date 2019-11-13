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
    ResultsWrapper
} from "./styles.js";
import Sort from "../../components/sort/sort.js";
import ResultCard from "../../components/resultCard/resultCard.js";

import { useLazyQuery } from "@apollo/react-hooks";
import { CATALOGUE_ITEMS_SEARCH } from "../../queries/queries.js";

const text = {
    results: "Results",
    searchTitle: "What health data to you need?"
};

const handleScroll = ({ currentTarget }, onLoadMore, offSet, setOffSet, dataLength, loading) => {
    if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight) {
        if (!loading && offSet <= dataLength) {
            onLoadMore(offSet);
            setOffSet(offSet + 10);
        }
    }
};

const ResultsData = props => {
    const loading = props.loading;
    const data = props.searchData;
    const fetchMore = props.fetchMore;
    const error = props.error;

    const onLoadMore = offSet => {
        fetchMore({
            variables: { recordLimit: 10, recordOffset: offSet, searchTerm: props.searchTerm },
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
        <ResultsWrapper
            onScroll={e => handleScroll(e, onLoadMore, props.offSet, props.setOffSet, props.dataLength, loading)}
        >
            {processedData.length > 0
                ? processedData.map((result, i) => (
                      <ResultCard key={`resultCard-${i}`} title={result.label} description={result.description} />
                  ))
                : !loading && <div>No results</div>}
            {loading && <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />}
        </ResultsWrapper>
    );
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

    const searchTerm = appContext.search.term;
    const searchData = appContext.searchData;
    const dataLength = appContext.searchData ? appContext.searchData.length : "0";
    const offSet = appContext.searchData.offSet;

    const clearSearchData = appContext.clearSearchData;
    const insertSearchData = appContext.insertSearchData;
    const setOffSet = appContext.setOffSet;

    const [getItemsSearch, { error, loading, data, fetchMore, networkStatus }] = useLazyQuery(CATALOGUE_ITEMS_SEARCH);

    const onSearch = e => {
        if (e.key === "Enter") {
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
        if (data && data.hdrCatalogueItemsSearch.data && !loading) {
            insertSearchData(parseInt(data.hdrCatalogueItemsSearch.count, 10), data.hdrCatalogueItemsSearch.data);
        }
    }, [data, loading]);

    const joinedLoading =
        loading || networkStatus === 3 || (searchData.data.length < offSet && offSet < searchData.length);

    console.log(
        "joinedLoading",
        joinedLoading,
        loading,
        networkStatus,
        searchData.data.length,
        offSet,
        searchData.length
    );

    return (
        <div>
            <SearchHeading invisible={pageState}>{text.searchTitle}</SearchHeading>
            <SearchBarWrapper main={!pageState}>
                <SearchBar labelText="Search" onKeyPress={onSearch} />
            </SearchBarWrapper>
            <Results invisible={!pageState}>
                <SearchInfo>
                    <Line />
                    <ResultsCounter>
                        <Bold>{dataLength}</Bold> {text.results}
                    </ResultsCounter>
                    <SortDiv>
                        <Sort />
                    </SortDiv>
                </SearchInfo>
                <ResultsData
                    searchTerm={searchTerm}
                    searchData={searchData}
                    offSet={offSet}
                    setOffSet={setOffSet}
                    dataLength={dataLength}
                    fetchMore={fetchMore}
                    loading={joinedLoading}
                    error={error}
                    insertSearchData={insertSearchData}
                />
            </Results>
        </div>
    );
};

export default SearchPage;
