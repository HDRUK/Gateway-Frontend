import React from "react";
import Search from "../../components/search/search";
import { SearchBar } from "../../styles/carbonComponents";
import styled from "styled-components";

const text = {
    results: "Results"
};

class SearchPage extends React.Component {
    state = {
        initiatedSearch: false
    };

    initiateSearch = () => {
        this.setState({
            initiatedSearch: !this.state.initiatedSearch
        });
    };

    render() {
        return (
            <div>
                <div onClick={this.initiateSearch}>
                    <SearchBarWrapper main={!this.state.initiatedSearch}>
                        <SearchBar />
                    </SearchBarWrapper>
                </div>
                <Results invisible={!this.state.initiatedSearch}>
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
    }
}

const SearchBarWrapper = styled.div`
    max-width: 14rem;
    margin: 0 auto 0;
    text-align: center;
    transform: translateY(${p => (p.main ? "18rem" : "0")});
    transition: 0.75s;
`;

const Results = styled.div`
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 1s;
    transition-delay: 0.5s;
`;

const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 40rem;
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
    height: 0.125rem;
    margin: 1rem 0;
    background-color: black;
`;

const TemporaryResultCard = styled.div`
    background-color: lightgray;
    border: 0.125rem solid gray;
    border-radius: 0.25rem;
    height: 12rem;
    margin-bottom: 1rem;
`;

const SearchInfo = styled.div`
    padding: 0 1rem 1rem 1rem;
`;

const Bold = styled.text`
    font-weight: 700;
`;

export default SearchPage;
