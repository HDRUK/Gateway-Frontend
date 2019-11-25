import React from "react";
import { create, act } from "react-test-renderer";
import SearchPage from "./SearchPage.js";
import ResultCard from "../../components/resultCard/resultCard.js";
import {
    SearchHeading,
    SearchBarWrapper,
    Results,
    SearchInfo,
    ResultsCounter,
    SortDiv,
    ResultsWrapper
} from "./styles.js";
import { Line, LinkNoDecoration, DarkText } from "../../styles/styles.js";
import { SearchBar, CenterLoading } from "../../styles/carbonComponents.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
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
                    <SearchPage />
                </AppContext.Provider>
            </MockedProvider>
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

// describe("<SearchPage> rendered after a search and before data loaded", () => {
//     let renderedComponent;
//     let renderedOutput;

//     beforeAll(() => {
//         context.state.searchPageState = true;
//         renderedComponent = create(
//             <MockedProvider mocks={apolloMock} addTypename={false}>
//                 <AppContext.Provider value={context}>
//                     <MemoryRouter>
//                         <SearchPage />
//                     </MemoryRouter>
//                 </AppContext.Provider>
//             </MockedProvider>
//         );
//         renderedOutput = renderedComponent.root;
//     });

//     it("should render loading state initially", async () => {
//         const searchBarWrapper = renderedOutput.findAllByType(SearchBarWrapper);
//         const searchBar = searchBarWrapper[0].props.children;
//         expect(searchBar.type).toBe(SearchBar);
//         await act(async () => searchBar.props.onKeyPress({ key: "Enter", target: { value: "test" } }));

//         const results = renderedOutput.findAllByType(Results);
//         const searchInfo = results[0].props.children[0];
//         const searchInfoComponents = searchInfo.props.children;
//         const resultsCounterText = searchInfoComponents[1].props.children;
//         const loading = results[0].props.children[1].props.children[1];
//         expect(resultsCounterText[0].props.children).toEqual(0);
//         expect(loading.type).toEqual(CenterLoading);
//     });
// });

// describe("<SearchPage> rendered after a search", () => {
//     let renderedComponent;
//     let renderedOutput;

//     beforeAll(() => {
//         context.state.searchPageState = true;
//         context.searchData = {
//             offSet: 2,
//             length: 0,
//             data: [
//                 {
//                     label: "title 1",
//                     description: "description 1"
//                 },
//                 {
//                     label: "title 2",
//                     description: "description 2"
//                 }
//             ]
//         };
//         renderedComponent = create(
//             <MockedProvider mocks={apolloMock} addTypename={false}>
//                 <AppContext.Provider value={context}>
//                     <MemoryRouter>
//                         <SearchPage />
//                     </MemoryRouter>
//                 </AppContext.Provider>
//             </MockedProvider>
//         );
//         renderedOutput = renderedComponent.root;
//     });

//     it("should render search heading as invisible", () => {
//         const searchHeading = renderedOutput.findAllByType(SearchHeading);
//         expect(searchHeading).toHaveLength(1);
//         expect(searchHeading[0].props.invisible).toBe(true);
//     });

//     it("should render the search bar with wrapper", () => {
//         const searchBarWrapper = renderedOutput.findAllByType(SearchBarWrapper);
//         expect(searchBarWrapper).toHaveLength(1);
//         expect(searchBarWrapper[0].props.main).toBe(false);

//         const searchBar = searchBarWrapper[0].props.children;
//         expect(searchBar.type).toBe(SearchBar);
//         expect(searchBar.props.labelText).toBe("Search");
//     });

//     it("should render the results", async () => {
//         await act(async () => await wait(1000));
//         const results = renderedOutput.findAllByType(Results);
//         expect(results).toHaveLength(1);
//         expect(results[0].props.invisible).toBe(false);

//         const searchInfo = results[0].props.children[0];
//         expect(searchInfo.type).toBe(SearchInfo);
//         const searchInfoComponents = searchInfo.props.children;
//         expect(searchInfoComponents[0].type).toEqual(Line);
//         expect(searchInfoComponents[1].type).toEqual(ResultsCounter);
//         const resultsCounterText = searchInfoComponents[1].props.children;
//         expect(resultsCounterText[0].props.children).toEqual(context.searchData.length);
//         expect(resultsCounterText[2]).toEqual(searchPageText.results);
//         expect(searchInfoComponents[2].type).toEqual(SortDiv);

//         const resultsWrapper = results[0].props.children[1];
//         expect(resultsWrapper.type).toBe(ResultsWrapper);
//         const resultsCards = resultsWrapper.props.children[0];

//         const loading = resultsWrapper.props.children[1];
//         expect(loading).toBe(false);

//         resultsCards.map((result, i) => {
//             expect(result.type).toEqual(LinkNoDecoration);
//             expect(result.key).toBe(`resultCard-${i}`);
//             expect(result.props.to).toEqual("detail/undefined");

//             result.props.onClick();
//             expect(context.setSearchResultId).toHaveBeenCalled();

//             const textStyle = result.props.children;
//             expect(textStyle.type).toBe(DarkText);
//             const card = textStyle.props.children;
//             expect(card.type).toBe(ResultCard);
//             expect(card.props.title).toBe(context.searchData.data[i].label);
//             expect(card.props.description).toBe(context.searchData.data[i].description);
//         });
//     });
// });
