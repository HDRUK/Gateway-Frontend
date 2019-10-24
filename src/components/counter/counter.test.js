import React from "react";
import { create, act } from "react-test-renderer";
import Counter from "./counter";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import mocks from "../../__mocks__/ApolloMock.js";

import { MockedProvider } from "@apollo/react-testing";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("<LandingPage> ", () => {
    let renderedComponent;

    describe("load query", () => {
        beforeEach(() => {
            act(() => {
                renderedComponent = create(
                    <MockedProvider mocks={mocks}>
                        <AppContext.Provider value={context}>
                            <Counter />
                        </AppContext.Provider>
                    </MockedProvider>
                );
            });
        });

        it("should test the counter loading state snapshot", () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it("should render the query result", async () => {
            await act(async () => await wait(1000));
            const p = renderedComponent.root.findAllByType("p");

            expect(p[0].props.children).toEqual(0);
            expect(p[1].props.children).toEqual(["Jurassic Park", ": ", "Michael Crichton"]);
        });
    });

    describe("when counter clicked", () => {
        beforeEach(async () => {
            await act(async () => await wait(1000));
            const p = renderedComponent.root.findAllByType("p");
            await act(async () => p[0].props.onClick());
        });

        it("should call counterFunc", async () => {
            expect(context.counterFunc).toHaveBeenCalled();
        });
    });

    describe("load failing query", () => {
        beforeEach(async () => {
            let errorMocks = mocks;
            errorMocks[0].result = null;
            errorMocks[0].error = new Error("Failed to load query");
            act(() => {
                renderedComponent = create(
                    <MockedProvider mocks={mocks}>
                        <AppContext.Provider value={context}>
                            <Counter />
                        </AppContext.Provider>
                    </MockedProvider>
                );
            });
            await act(async () => await wait(1000));
        });

        it("should display error", () => {
            const div = renderedComponent.root.findByType("div");
            expect(div.props.children).toEqual("Error :(");
        });
    });
});
