import React from "react";
import { create } from "react-test-renderer";
import LandingPage from "./LandingContent";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import mocks from "../../__mocks__/ApolloMock.js";

import { MockedProvider } from "@apollo/react-testing";

describe("<LandingPage> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <MockedProvider mocks={mocks}>
                <AppContext.Provider value={context}>
                    <LandingPage />
                </AppContext.Provider>
            </MockedProvider>
        );
    });

    it("should test the LandingPage Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });
});
