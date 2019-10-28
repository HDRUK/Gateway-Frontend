import React from "react";
import { create, act } from "react-test-renderer";
import Counter from "./counter";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import mocks from "../../__mocks__/ApolloMock.js";

import { MockedProvider } from "@apollo/react-testing";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("<Counter> ", () => {
    let renderedComponent;

    describe("load query", () => {
        beforeEach(() => {
            act(() => {
                renderedComponent = create(
                    <MockedProvider mocks={mocks}>
                        <Counter />
                    </MockedProvider>
                );
            });
        });

        it("should test the counter loading state snapshot", () => {
            expect(renderedComponent).toMatchSnapshot();
        });

        it("should render the query result", async () => {
            await act(async () => await wait(1000));
            const li = renderedComponent.root.findAllByType("li");
            console.log("test", renderedComponent.toJSON());

            // expect(h1.props.children).toEqual("1");

            expect(li[0].props.children).toEqual("1571736386903");
            expect(li[1].props.children).toEqual("1571736386903");
            expect(li[2].props.children).toEqual("https://theapi/thesearch?param1=1");
            expect(li[3].props.children).toEqual("ANON");
            expect(li[4].props.children).toEqual("theapi");
        });
    });

    describe("load failing query", () => {
        beforeAll(async () => {
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
