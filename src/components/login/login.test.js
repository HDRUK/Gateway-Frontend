import React from "react";
import { create } from "react-test-renderer";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import {
    CenterBlock,
    DarkText,
    Heading,
    MediumSpace,
    SmallSpace,
    LargeSpace,
    LinkNoDecoration
} from "../../styles/styles.js";
import { StyledButton } from "../../styles/carbonComponents.js";

import { AppContext } from "../../HOC/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock.js";

const loginText = {
    headingText: "Log in to access our datasets",
    loginButton: "Log out",
    continueButton: "Continue without logging in"
};

describe("<Login> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <AppContext.Provider value={context}>
                    <Login />
                </AppContext.Provider>
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the login block is rendered", () => {
        it("should have the correct destination for the continue button", () => {
            const link = renderedOutput.findAllByType(LinkNoDecoration);
            const continueDestination = link[0].props.to;
            expect(continueDestination).toBe("/search");
        });
        it("should render the correct components", () => {
            const centerBlocks = renderedOutput.findAllByType(CenterBlock);
            const darkText = centerBlocks[0].findByType(DarkText);
            const darkTextChildren = darkText.props.children;
            expect(darkTextChildren).toHaveLength(4);
            expect(darkTextChildren[0].type).toEqual(Heading);
            expect(darkTextChildren[1].type).toEqual(MediumSpace);
            expect(darkTextChildren[2].type).toEqual(CenterBlock);
            expect(darkTextChildren[3].type).toEqual(LargeSpace);

            expect(darkTextChildren[0].props.children).toEqual(loginText.headingText);

            const centerBlock2Content = darkTextChildren[2].props.children;
            expect(centerBlock2Content).toHaveLength(3);
            expect(centerBlock2Content[0].type).toBe("a");
            const primaryButton = centerBlock2Content[0].props.children;
            expect(primaryButton.props.kind).toEqual("primary");
            expect(primaryButton.props.children).toEqual(loginText.loginButton);

            expect(centerBlock2Content[1].type).toEqual(SmallSpace);
            expect(centerBlock2Content[2].type).toEqual(LinkNoDecoration);
            expect(centerBlock2Content[2].props.to).toEqual("/search");

            const secondaryButton = centerBlock2Content[2].props.children;
            expect(secondaryButton.type).toEqual(StyledButton);
            expect(secondaryButton.props.kind).toEqual("secondary");
            expect(secondaryButton.props.children).toEqual(loginText.continueButton);
        });
    });
});
