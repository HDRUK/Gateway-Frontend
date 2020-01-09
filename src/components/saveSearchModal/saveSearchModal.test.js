import React from "react";
import { create } from "react-test-renderer";
import SaveSearchModal from "./saveSearchModal.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";

import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";

import { Modal, TextInput } from "carbon-components-react";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
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
                        <SaveSearchModal />
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
    });

    it("should have correct props on components", () => {
        const modal = renderedOutput.findByType(Modal);
        const textInput = renderedOutput.findByType(TextInput);

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
    });
});
