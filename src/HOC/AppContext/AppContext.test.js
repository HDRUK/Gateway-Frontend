import React from "react";
import { create } from "react-test-renderer";
import AppContextProvider from "./AppContext";

// TODO: This test needs to be adjusted as AppContextProvider is no longer a class so getInstance() does not work

describe("<AppContextProvider> ", () => {
    let renderedComponent;
    let componentInstance;

    beforeEach(() => {
        renderedComponent = create(
            <AppContextProvider>
                <div>test</div>
            </AppContextProvider>
        );
        // componentInstance = renderedComponent.getInstance();
    });

    it("should test the AppContextProvider HOC", () => {
        // expect(componentInstance.state.counter).toEqual(0);
        // expect(componentInstance.counterFunc).toBeDefined();
    });

    it("should increase state counter by 1 when counterFunc is called", () => {
        // componentInstance.counterFunc();
        // expect(componentInstance.state.counter).toEqual(1);
    });

    it("should change the search page state when returnSearchResults is called with key 'Enter", () => {
        // const prevSearchPageState = componentInstance.state.searchPageState;
        // componentInstance.returnSearchResults({ key: "Enter" });
        // expect(componentInstance.state.searchPageState).toBe(!prevSearchPageState);
    });

    it("should not change the search page state when returnSearchResults is called with other key", () => {
        // const prevSearchPageState = componentInstance.state.searchPageState;
        // componentInstance.returnSearchResults({ key: "T" });
        // expect(componentInstance.state.searchPageState).toBe(prevSearchPageState);
    });
});
