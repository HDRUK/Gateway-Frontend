import React from "react";
import { create } from "react-test-renderer";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { CenterBlock, Heading, SmallSpace, LinkNoDecoration, TinySpace, LinkText } from "../../styles/styles.js";
import { LoginWrapper } from "./styles";
import { StyledButton, CloudButton } from "../../styles/carbonComponents.js";

import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";

import { AppContext } from "../../HOC/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock.js";

const loginText = {
    loginButton: "Login via OpenAthens",
    logoutButton: "Logout",
    continueButton: "Continue as a guest",
    loggedInContinueButton: "Continue",
    description:
        "Search and explore information about these datasets. If you have an OpenAthens account, you can log in to enquire about access to these datasets for research and innovation.",
    headingText: "Explore & Discover our health datasets from across the UK."
};

describe("<Login> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <Login />
                    </StyleWrapper>
                </AppContext.Provider>
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the login block is rendered", () => {
        it("should have the correct destination for the continue button", () => {
            const link = renderedOutput.findAllByType(LinkNoDecoration);
            const continueDestination = link[0].props.to;
            expect(continueDestination).toBe("/innovation");
        });
        it("should render the correct components", () => {
            const centerBlock = renderedOutput.findByType(CenterBlock);
            const loginWrapper = centerBlock.props.children;
            expect(loginWrapper.type).toBe(LoginWrapper);

            const loginWrapperChildren = loginWrapper.props.children;

            expect(loginWrapperChildren).toHaveLength(5);
            expect(loginWrapperChildren[0].type).toEqual(Heading);
            expect(loginWrapperChildren[1].type).toEqual(TinySpace);
            expect(loginWrapperChildren[2].type).toEqual(CenterBlock);
            expect(loginWrapperChildren[3].type).toEqual(TinySpace);
            expect(loginWrapperChildren[4].type).toEqual(CenterBlock);

            expect(loginWrapperChildren[0].props.children).toEqual(loginText.headingText);

            const description = loginWrapperChildren[2].props.children;
            expect(description.type).toBe("p");
            expect(description.props.children).toBe(loginText.description);

            const buttons = loginWrapperChildren[4].props.children;
            expect(buttons).toHaveLength(3);

            expect(buttons[0].type).toBe(LinkNoDecoration);
            expect(buttons[1].type).toBe(SmallSpace);
            expect(buttons[2].type).toBe(LinkText);
            expect(buttons[2].props.href).toBe("/logout");

            expect(buttons[0].props.children.type).toBe(CloudButton);
            expect(buttons[0].props.children.props.children).toBe(loginText.loggedInContinueButton);
            expect(buttons[0].props.children.props.kind).toBe("secondary");
            expect(buttons[0].props.children.props.center).toBeTruthy();

            const button = buttons[2].props.children;
            expect(button.type).toBe(StyledButton);
            expect(button.props.kind).toBe("primary");
            expect(button.props.children).toBe(loginText.logoutButton);
            expect(button.props.center).toBeTruthy();
        });
    });
});
