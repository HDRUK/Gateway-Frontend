import React from "react";
import { create } from "react-test-renderer";
import SaveSearch from "./saveSearch.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";

import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";

import { Modal, TextInput } from "carbon-components-react";
import { SaveSearchButton, RightSmallInlineLoading } from "../../styles/carbonComponents.js";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
    savedSearch: "Search saved",
    savingSearch: "Seach saving...",
    savingFailed: "Unable to save search",
    rename: "Rename",
    error: {
        tooLong: "Name must be less than 100 characters long"
    },
    aria: {
        renameAndSaveSearch: "Rename and save search."
    },
    enterTextHere: "Enter text here..."
};

describe("<SaveSearch> ", () => {
    let renderedComponent;
    let renderedOutput;
    const searchTerm = "test";

    beforeEach(() => {
        context.search.term = searchTerm;
        renderedComponent = create(
            <MockedProvider mocks={apolloMock}>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <SaveSearch />
                    </StyleWrapper>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const modal = renderedOutput.findAllByType(Modal);
        expect(modal).toHaveLength(1);
        const textInput = modal[0].props.children;
        expect(textInput.type).toBe(TextInput);

        const saveButton = renderedOutput.findByType(SaveSearchButton);
        expect(saveButton.props.children[0]).toBe(textItems.saveSearch);
        expect(saveButton.props.children[1]).toBe(false);
    });

    it("should have correct props on components", () => {
        const modal = renderedOutput.findByType(Modal);
        const textInput = renderedOutput.findByType(TextInput);
        const saveButton = renderedOutput.findByType(SaveSearchButton);

        expect(modal.props.id).toBe("save-search-modal");
        expect(modal.props.open).toBe(false);
        expect(typeof modal.props.onRequestSubmit).toBe("function");
        expect(typeof modal.props.onSecondarySubmit).toBe("function");
        expect(typeof modal.props.onRequestClose).toBe("function");
        expect(modal.props.modalLabel).toBe(textItems.saveSearch);
        expect(modal.props.modalHeading).toBe(searchTerm);
        expect(modal.props.primaryButtonText).toBe(textItems.save);
        expect(modal.props.secondaryButtonText).toBe(textItems.cancel);
        expect(modal.props.primaryButtonDisabled).toBe(false);
        expect(modal.props["aria-label"]).toBe(textItems.aria.renameAndSaveSearch);

        expect(textInput.props.id).toBe("save-search-rename");
        expect(textInput.props.labelText).toBe(textItems.rename);
        expect(textInput.props.value).toBe("");
        expect(textInput.props.placeholder).toBe(searchTerm);
        expect(typeof textInput.props.onChange).toBe("function");
        expect(textInput.props.invalid).toBe(false);
        expect(textInput.props.invalidText).toBe(textItems.error.tooLong);

        expect(typeof saveButton.props.onClick).toBe("function");
        expect(saveButton.props.kind).toBe("tertiary");
        expect(saveButton.props.disabled).toBe(false);
        expect(saveButton.props.status).toBe("active");
        expect(saveButton.props.size).toBe("small");
    });
});
