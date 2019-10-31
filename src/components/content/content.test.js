import React from "react";
import { create } from "react-test-renderer";
import Content from "./content.js";
import { MemoryRouter } from "react-router-dom";
import { SideStripeLeft, SideStripeRight, ContentWrapper } from "../../styles/styles.js";
import AppSideNav from "../appSideNav/appSideNav.js";

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
                <Content nav />
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
