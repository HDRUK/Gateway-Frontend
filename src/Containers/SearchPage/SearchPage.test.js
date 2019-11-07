import React from "react";
import { create } from "react-test-renderer";
import SearchPage from "./SearchPage.js";
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
import { Line } from "../../styles/styles.js";
import { SearchBar } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

const searchPageText = {
    results: "Results",
    searchTitle: "What health data to you need?"
};

describe("<SearchPage> rendered before a search", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        context.state.searchPageState = false;
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <SearchPage />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render the search heading", () => {
        const searchHeading = renderedOutput.findAllByType(SearchHeading);
        expect(searchHeading).toHaveLength(1);
        expect(searchHeading[0].props.invisible).toBe(false);
        expect(searchHeading[0].props.children).toBe(searchPageText.searchTitle);
    });

    it("should render the search bar with wrapper", () => {
        const searchBarWrapper = renderedOutput.findAllByType(SearchBarWrapper);
        expect(searchBarWrapper).toHaveLength(1);
        expect(searchBarWrapper[0].props.main).toBe(true);

        const searchBar = searchBarWrapper[0].props.children;
        expect(searchBar.type).toBe(SearchBar);
        expect(searchBar.props.labelText).toBe("Search");
        searchBar.props.onKeyPress();
        expect(searchBar.props.onKeyPress).toHaveBeenCalled();
    });

    it("should render the results as invisible", () => {
        const results = renderedOutput.findAllByType(Results);
        expect(results).toHaveLength(1);
        expect(results[0].props.invisible).toBe(true);

        const searchInfo = results[0].props.children[0];
        expect(searchInfo.type).toBe(SearchInfo);

        const resultsWrapper = results[0].props.children[1];
        expect(resultsWrapper.type).toBe(ResultsWrapper);
    });
});

describe("<SearchPage> rendered after a search", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        context.state.searchPageState = true;
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <SearchPage />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render search heading as invisible", () => {
        const searchHeading = renderedOutput.findAllByType(SearchHeading);
        expect(searchHeading).toHaveLength(1);
        expect(searchHeading[0].props.invisible).toBe(true);
    });

    it("should render the search bar with wrapper", () => {
        const searchBarWrapper = renderedOutput.findAllByType(SearchBarWrapper);
        expect(searchBarWrapper).toHaveLength(1);
        expect(searchBarWrapper[0].props.main).toBe(false);

        const searchBar = searchBarWrapper[0].props.children;
        expect(searchBar.type).toBe(SearchBar);
        expect(searchBar.props.labelText).toBe("Search");
        searchBar.props.onKeyPress();
        expect(searchBar.props.onKeyPress).toHaveBeenCalled();
    });

    it("should render the results", () => {
        const results = renderedOutput.findAllByType(Results);
        expect(results).toHaveLength(1);
        expect(results[0].props.invisible).toBe(false);

        const searchInfo = results[0].props.children[0];
        expect(searchInfo.type).toBe(SearchInfo);
        const searchInfoComponents = searchInfo.props.children;
        expect(searchInfoComponents[0].type).toEqual(Line);
        expect(searchInfoComponents[1].type).toEqual(ResultsCounter);
        const resultsCounterText = searchInfoComponents[1].props.children;
        expect(resultsCounterText[0].props.children).toEqual(`${context.search.data.length}`);
        expect(resultsCounterText[2]).toEqual(searchPageText.results);
        expect(searchInfoComponents[2].type).toEqual(SortDiv);

        const resultsWrapper = results[0].props.children[1];
        expect(resultsWrapper.type).toBe(ResultsWrapper);
        const resultsCards = resultsWrapper.props.children;
        resultsCards.map((card, i) => {
            expect(card.type).toBe(TemporaryResultCard);
            expect(card.key).toBe(`temporaryResultCard-${i}`);
            expect(card.props.children).toBe(context.search.data[i].title);
        });
    });

    // TODO: Test loading/error states - to be done when GQL Query is implemented
});
