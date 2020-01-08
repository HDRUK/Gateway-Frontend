import React from "react";
import { create, act } from "react-test-renderer";
import SearchPage from "./SearchPage.js";
import { Results, SearchResultsWrapper } from "./styles.js";
import { SearchInfo, ResultsCounter, SortDiv } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import context from "../../__mocks__/AppContextMock.js";
import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";
import { MemoryRouter } from "react-router-dom";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const searchPageText = {
    results: "Results",
    searchTitle: "What health data do you need?"
};

describe("<SearchPage> rendered before a search", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        context.state.searchPageState = false;
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <SearchPage />
                    </StyleWrapper>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render the results as invisible", () => {
        const results = renderedOutput.findAllByType(Results);
        expect(results).toHaveLength(1);
        expect(results[0].props.invisible).toBe(true);

        const searchInfo = results[0].props.children[0];
        expect(searchInfo.type).toBe(SearchInfo);
    });
});

describe("<SearchPage> rendered after a search", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        context.state.searchPageState = true;
        context.search.term = "test";
        context.searchData = {
            offSet: 0,
            length: 0,
            data: [
                {
                    label: "title 1",
                    description: "description 1"
                },
                {
                    label: "title 2",
                    description: "description 2"
                }
            ]
        };
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <MemoryRouter>
                            <SearchPage />
                        </MemoryRouter>
                    </StyleWrapper>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
        act(() => wait(0));
    });

    it("should render the results", async () => {
        const results = renderedOutput.findAllByType(Results);
        expect(results).toHaveLength(1);
        expect(results[0].props.invisible).toBe(false);

        const searchInfo = results[0].props.children[0];
        expect(searchInfo.type).toBe(SearchInfo);
        const searchInfoComponents = searchInfo.props.children;
        expect(searchInfoComponents[0].type).toEqual(ResultsCounter);
        const resultsCounterText = searchInfoComponents[0].props.children;
        expect(resultsCounterText[0].props.children).toEqual(context.searchData.length);
        expect(resultsCounterText[2]).toEqual(searchPageText.results);
        expect(searchInfoComponents[1].type).toEqual(SortDiv);

        const searchResultsWrapper = results[0].props.children[1];
        expect(searchResultsWrapper.type).toBe(SearchResultsWrapper);
        const resultsCards = searchResultsWrapper.props.children[0];
        const loading = searchResultsWrapper.props.children[1];
        expect(loading).toBe(false);
        expect(resultsCards).toHaveLength(2);
    });
});
