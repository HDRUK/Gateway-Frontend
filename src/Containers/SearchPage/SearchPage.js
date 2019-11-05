import React, { useContext } from "react";
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

    const dataLength = data ? `${data.length}` : "0";

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
                    {loading ? (
                        <CenterLoading active={true} withOverlay={false} description="Active loading indicator" />
                    ) : (
                        data.map((card, i) => (
                            <ResultCard key={`resultCard-${i}`} title={card.title} description={card.description} />
                        ))
                    )}
                </ResultsWrapper>
            </Results>
        </div>
    );
};

export default SearchPage;
