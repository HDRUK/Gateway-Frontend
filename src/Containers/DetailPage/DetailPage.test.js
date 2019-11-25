import React from "react";
import { create, act } from "react-test-renderer";
import DetailPage from "./DetailPage.js";

import AppContextProvider, { AppContext } from "../../HOC/AppContext/AppContext.js";
import apolloMock from "../../__mocks__/ApolloMock.js";

import context from "../../__mocks__/AppContextMock.js";

import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("<DetailPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        act(() => {
            renderedComponent = create(
                <MockedProvider mocks={apolloMock} addTypename={false}>
                    <AppContextProvider value={context}>
                        <MemoryRouter>
                            <DetailPage />{" "}
                        </MemoryRouter>{" "}
                    </AppContextProvider>
                </MockedProvider>
            );
        });
    });

    it("should render the detailed summary page with results", async () => {
        await act(async () => await wait(1000));
    });
});
