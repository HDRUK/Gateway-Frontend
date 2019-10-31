import React from "react";
import { create } from "react-test-renderer";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("<Login> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the continue button is clicked", () => {
        it("should have the correct distination", () => {
            expect(renderedOutput.findByType("a").props.href).toBe("/search");
        });
        it("should call the continue function", () => {
            const props = renderedOutput.findByType("a").props;
            const mockFn = jest.fn();
            props.onClick = mockFn;
            props.onClick();
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
