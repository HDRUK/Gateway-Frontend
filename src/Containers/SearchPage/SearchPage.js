import React, { useContext } from "react";
import styled from "styled-components";
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
    ResultsWrapper,
    TemporaryResultCard
} from "./styles.js";
import Sort from "../../components/sort/sort.js";

const text = {
    results: "Results",
    searchTitle: "What health data to you need?"
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

    const loading = appContext.search.loading;
    const data = appContext.search.data;

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
                        <Bold>{data ? `${data.length}` : "0"}</Bold> {text.results}
                    </ResultsCounter>
                    <SortDiv>
                        <Sort />
                    </SortDiv>
                </SearchInfo>
                <ResultsWrapper>
                    {loading ? (
                        <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                    ) : (
                        data.map((card, i) => (
                            <TemporaryResultCard key={`temporaryResultCard-${i}`}>{card.title}</TemporaryResultCard>
                        ))
                    )}
                </ResultsWrapper>
            </Results>
        </div>
    );
};

export default SearchPage;
