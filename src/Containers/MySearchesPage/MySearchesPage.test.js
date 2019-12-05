import React from "react";
import { create, act } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";

import MySearchesPage from "./MySearchesPage.js";
import SavedSearchCard from "../../components/savedSearchCard/savedSearchCard.js";

import { CenterLoading } from "../../styles/carbonComponents";
import { ResultsWrapper } from "../../styles/styles.js";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("<MySearchesPage> rendered before a search", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <MemoryRouter>
                        <MySearchesPage />
                    </MemoryRouter>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should initially render the loading bar", () => {
        const centerLoading = renderedOutput.findAllByType(CenterLoading);
        expect(centerLoading).toHaveLength(1);
        expect(centerLoading[0].props.active).toBe(true);
        expect(centerLoading[0].props.withOverlay).toBe(false);
        expect(centerLoading[0].props.description).toBe("Active loading indicator");
    });
});

describe("<MySearchesPage> rendered after data loaded", () => {
    let renderedComponent;
    let renderedOutput;
    let resultsData;

    beforeAll(() => {
        resultsData = [
            {
                id: "1",
                detail: "test",
                endPoint: "http://localhost:5001",
                recordLimit: 10,
                recordOffset: 0,
                createdOn: "01 Nov 2019",
                name: null,
                filters: [
                    {
                        type: "Geography",
                        value: "England"
                    }
                ],
                sort: {
                    applied: "Alphabetical",
                    value: "Up"
                }
            },
            {
                id: "2",
                detail: "test2",
                endPoint: "http://localhost:5001",
                recordLimit: 10,
                recordOffset: 0,
                createdOn: "02 Nov 2019",
                name: "Test 2",
                filters: [
                    {
                        type: "Geography",
                        value: "Scotland"
                    }
                ],
                sort: {
                    applied: "Alphabetical",
                    value: "Down"
                }
            }
        ];
        context.savedSearchesData.data = resultsData;
        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <MemoryRouter>
                        <MySearchesPage />
                    </MemoryRouter>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render the results", async () => {
        await act(async () => await wait(1000));
        const resultsWrapper = renderedOutput.findAllByType(ResultsWrapper);
        expect(resultsWrapper).toHaveLength(1);

        const resultsCards = resultsWrapper[0].props.children;
        expect(resultsCards).toHaveLength(2);
        resultsCards.map((card, i) => {
            expect(card.type).toBe(SavedSearchCard);
            expect(card.key).toBe(`savedSearchCard-${i}`);
            expect(card.props.savedSearchIndex).toBe(i);
        });
    });
});
