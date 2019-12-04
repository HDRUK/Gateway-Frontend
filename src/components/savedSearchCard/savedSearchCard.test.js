import React from "react";
import { create } from "react-test-renderer";

import { MemoryRouter } from "react-router-dom";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";
import { MockedProvider } from "@apollo/react-testing";
import apolloMock from "../../__mocks__/ApolloMock.js";
import { Link } from "react-router-dom";
import SavedSearchCard from "./savedSearchCard";
import LabeledContent from "../../components/labeledContent/labeledContent.js";
import { Tag, Modal } from "carbon-components-react";
import { CenterLoading } from "../../styles/carbonComponents.js";
import { Card } from "../../styles/styles.js";
import { ContentDiv, ButtonDiv, SavedSearchButton, SavedSearchTitle, CardLoadingBox } from "./styles.js";

const textItems = {
    delete: "Delete",
    cancel: "Cancel",
    deleteSearch: "Delete Search",
    deleteSearchConfirmation: "Are you sure you want to delete this search?",
    runSearch: "Run Search"
};

describe("<SavedSearchCard> ", () => {
    let renderedComponent;
    let renderedOutput;
    let resultsData;
    const searchName = "Test Name";

    beforeEach(() => {
        resultsData = [
            {
                id: "1",
                detail: "test",
                endPoint: "http://localhost:5001",
                recordLimit: 10,
                recordOffset: 0,
                createdOn: "01 Nov 2019",
                name: `${searchName}`,
                filters: [
                    {
                        type: "Geography",
                        value: "England"
                    }
                ],
                sort: {
                    applied: "Alphabetical",
                    value: "Up"
                }
            }
        ];
        context.savedSearchesData.data = resultsData;

        renderedComponent = create(
            <MockedProvider mocks={apolloMock} addTypename={false}>
                <AppContext.Provider value={context}>
                    <MemoryRouter>
                        <SavedSearchCard savedSearchIndex={0} />
                    </MemoryRouter>
                </AppContext.Provider>
            </MockedProvider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const card = renderedOutput.findAllByType(Card);
        expect(card).toHaveLength(1);

        const modal = card[0].props.children[1];
        expect(modal.type).toBe(Modal);

        const contentDiv = card[0].props.children[2];
        expect(contentDiv.type).toBe(ContentDiv);

        const buttonDiv = card[0].props.children[3];
        expect(buttonDiv.type).toBe(ButtonDiv);
    });

    it("should contain the correct content", () => {
        const modals = renderedOutput.findAllByType(Modal);
        const modal = modals[0];
        expect(modals).toHaveLength(1);
        expect(modal.props.kind).toBe("secondary");
        expect(modal.props.danger).toBe(true);
        expect(modal.props.primaryButtonText).toBe(textItems.delete);
        expect(modal.props.open).toBe(false);
        expect(modal.props.shouldSubmitOnEnter).toBe(true);
        expect(modal.props.hasScrollingContent).toBe(false);
        expect(modal.props.modalHeading).toBe(searchName);
        expect(modal.props.modalLabel).toBe(textItems.deleteSearch);
        expect(modal.props["aria-label"]).toBe("A label to be read by screen readers on the modal root node");
        expect(modal.props.secondaryButtonText).toBe(textItems.cancel);
        expect(typeof modal.props.onBlur).toBe("function");
        expect(typeof modal.props.onRequestClose).toBe("function");
        expect(typeof modal.props.onRequestSubmit).toBe("function");
        expect(typeof modal.props.onSecondarySubmit).toBe("function");

        const modalParagraph = modal.props.children;
        expect(modalParagraph.props.children).toBe(textItems.deleteSearchConfirmation);
    });
});
