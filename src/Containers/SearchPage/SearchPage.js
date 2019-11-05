import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { SearchBar, CenterLoading } from "../../styles/carbonComponents";
import { Bold, ParagraphHeading } from "../../styles/styles.js";
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

const SearchHeading = styled(ParagraphHeading)`
    height: 0;
    text-align: center;
    transform: translateY(12rem);
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 0.25s;
`;

const SearchBarWrapper = styled.div`
    max-width: 32rem;
    padding: 0 1rem;
    margin: 0 auto 0;
    text-align: center;
    transform: translateY(${p => (p.main ? "16rem" : "0")});
    transition: 0.7s;
    z-index: 1;
`;

const Results = styled.div`
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 0.8s;
    transition-delay: 0.5s;
    pointer-events: ${p => (p.invisible ? "none" : "unset")};
`;

const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 32rem;
    max-height: calc(100vh - 25rem);
    overflow: scroll;
    padding: 0 1rem 0 1rem;
`;

const ResultsCounter = styled.div`
    display: inline-block;
    line-height: 2.5rem;
`;

const SortDiv = styled.div`
    display: inline-block;
    float: right;
`;

const Line = styled.div`
    height: 0.0625rem;
    margin: 1rem 0 0.5rem 0;
    background-color: black;
`;

const TemporaryResultCard = styled.div`
    height: 12rem;
    margin-bottom: 1rem;
    background-color: #d8d8d8;
    border: 0.0625rem solid #979797;
    border-radius: 0.25rem;
    padding: 1rem;
`;

const SearchInfo = styled.div`
    padding: 0 1rem 0.5rem 1rem;
`;

export default SearchPage;
