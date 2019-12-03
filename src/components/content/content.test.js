import React from "react";
import { create } from "react-test-renderer";
import Content from "./content.js";
import { MemoryRouter } from "react-router-dom";
import { SideStripeLeft, SideStripeRight, ContentWrapper } from "../../styles/styles.js";
import AppSideNav from "../appSideNav/appSideNav.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("Render content with no props", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<Content />);
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should render the correct components", () => {
            const wrapper = renderedOutput.findByType(ContentWrapper);
            wrapper.findByType(SideStripeLeft);
            wrapper.findByType(SideStripeRight);
        });
    });
});
describe("Render content with nav prop", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <AppContext.Provider value={context}>
                    <Content nav />
                </AppContext.Provider>
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should render the correct components", () => {
            const wrapper = renderedOutput.findByType(ContentWrapper);
            renderedOutput.findAllByType(AppSideNav);

            expect(wrapper.props.nav).toBe(true);
        });
    });
});
