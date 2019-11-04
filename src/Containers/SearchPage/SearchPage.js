import React, { useContext } from "react";
import { SearchBar } from "../../styles/carbonComponents";
import { ParagraphHeading } from "../../styles/styles.js";
import styled from "styled-components";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const text = {
    results: "Results",
    searchTitle: "What health data to you need?"
};

const SearchPage = () => {
    const appContext = useContext(AppContext);
    const pageState = appContext.state.searchPageState;
    const returnSearchResults = appContext.returnSearchResults;

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
                        <Bold>X</Bold> {text.results}
                    </ResultsCounter>
                    <SortDiv>SORT COMPONENT</SortDiv>
                </SearchInfo>
                <ResultsWrapper>
                    <TemporaryResultCard />
                    <TemporaryResultCard />
                    <TemporaryResultCard />
                    <TemporaryResultCard />
                    <TemporaryResultCard />
                    <TemporaryResultCard />
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
    max-height: calc(100vh - 24rem);
    overflow: scroll;
    padding: 0 1rem 0 1rem;
`;

const ResultsCounter = styled.div`
    display: inline-block;
`;

const SortDiv = styled.div`
    display: inline-block;
    float: right;
`;

const Line = styled.div`
    height: 0.0625rem;
    margin: 1rem 0;
    background-color: black;
`;

const TemporaryResultCard = styled.div`
    height: 12rem;
    margin-bottom: 1rem;
    background-color: #d8d8d8;
    border: 0.0625rem solid #979797;
    border-radius: 0.25rem;
`;

const SearchInfo = styled.div`
    padding: 0 1rem 1rem 1rem;
`;

const Bold = styled.text`
    font-weight: 700;
`;

export default SearchPage;
