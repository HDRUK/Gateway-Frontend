import React from "react";
import { create } from "react-test-renderer";
import AppContextProvider from "./AppContext";

describe("<AppContextProvider> ", () => {
    let renderedComponent;
    let componentInstance;

    beforeEach(() => {
        renderedComponent = create(
            <AppContextProvider>
                <div>test</div>
            </AppContextProvider>
        );
        componentInstance = renderedComponent.getInstance();
    });

    it("should test the AppContextProvider HOC", () => {
        expect(componentInstance.state.counter).toEqual(0);
        expect(componentInstance.counterFunc).toBeDefined();
        expect(renderedComponent).toMatchSnapshot();
    });

    describe("when counterFunc is called", () => {
        componentInstance.counterFunc();

        it("should increase state counter by 1", () => {
            expect(componentInstance.state.counter).toEqual(1);
        });
    });
});
