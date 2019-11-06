import React, { useState, useContext } from "react";
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

// *** TESTING GQL SEARCH ***
import { useQuery } from "@apollo/react-hooks";
import { CATALOGUE_ITEMS_SEARCH } from "../../queries/queries.js";
// *** TESTING GQL SEARCH ***

const text = {
    results: "Results",
    searchTitle: "What health data to you need?"
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

    const [dataLength, setDataLength] = useState("0");
    const searchTerm = appContext.search.term;

    const ResultsData = props => {
        const { error, loading, data } = useQuery(CATALOGUE_ITEMS_SEARCH, {
            variables: { searchTerm: props.searchTerm }
        });

        if (loading) return <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />;
        if (error) return <div>Error :(</div>;

        setDataLength(data.hdrCatalogueItemsSearch.count);

        const processedData = data && data.hdrCatalogueItemsSearch && data.hdrCatalogueItemsSearch.data;
        return processedData && processedData.length > 0 ? (
            processedData.map((result, i) => (
                <ResultCard key={`resultCard-${i}`} title={result.label} description={result.description} />
            ))
        ) : (
            <div>No results</div>
        );
    };

    return (
        <div>
            <SearchHeading invisible={pageState}>{text.searchTitle}</SearchHeading>
            <SearchBarWrapper main={!pageState}>
                <SearchBar labelText="Search" onKeyPress={returnSearchResults} />
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
                <ResultsWrapper>
                    {/* {loading ? (
                        <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                    ) : (
                        data.map((card, i) => (
                            <ResultCard key={`resultCard-${i}`} title={card.title} description={card.description} />
                        ))
                    )} */}
                    <ResultsData searchTerm={searchTerm} />
                </ResultsWrapper>
            </Results>
        </div>
    );
};

export default SearchPage;
