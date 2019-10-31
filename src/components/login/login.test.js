import React from "react";
import { create } from "react-test-renderer";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { CenterBlock, DarkText, Heading, MediumSpace, SmallSpace, LargeSpace } from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

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

    describe("when the login block is rendered", () => {
        it("should have the correct destination for the continue button", () => {
            const link = renderedOutput.findAllByType(Link);
            const continueDestination = link[0].props.to;
            expect(continueDestination).toBe("/search");
        });
        it("should render the correct components", () => {
            const centerBlocks = renderedOutput.findAllByType(CenterBlock);
            const darkText = renderedOutput.findAllByType(DarkText);
            const headings = renderedOutput.findAllByType(Heading);
            const mediumSpaces = renderedOutput.findAllByType(MediumSpace);
            const buttons = renderedOutput.findAllByType(StyledButton);
            const smallSpaces = renderedOutput.findAllByType(SmallSpace);
            const links = renderedOutput.findAllByType(Link);
            const largeSpaces = renderedOutput.findAllByType(LargeSpace);

            expect(centerBlocks).toHaveLength(2);
            expect(darkText).toHaveLength(1);
            expect(headings).toHaveLength(1);
            expect(mediumSpaces).toHaveLength(1);
            expect(buttons).toHaveLength(2);
            expect(smallSpaces).toHaveLength(1);
            expect(links).toHaveLength(1);
            expect(largeSpaces).toHaveLength(1);
        });
    });
});
