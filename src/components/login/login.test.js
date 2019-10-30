import React from "react";
import { create } from "react-test-renderer";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("<Login> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    });

    it("should test the Login Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    describe("when the continue button is clicked", () => {
        it("should have the correct distination", () => {
            expect(renderedComponent.root.findByType("a").props.href).toBe("/search");
        });
        it("should call the continue function", () => {
            const props = renderedComponent.root.findByType("a").props;
            const mockFn = jest.fn();
            props.onClick = mockFn;
            props.onClick();
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
