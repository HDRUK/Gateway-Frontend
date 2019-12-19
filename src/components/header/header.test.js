import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter, Link } from "react-router-dom";
import Header from "./header.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { InvertedHeaderText, LinkNoDecoration, WidthWrapper } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import hdr_logo_white from "../../assets/hdruk_logo_white.png";
import { AppContext } from "../../HOC/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock.js";
import { HeaderAlignmentItem, HeaderSpacer, HeaderLink } from "./styles.js";

const headerText = {
    header: "Innovation Gateway",
    login: "Login",
    logout: "Logout"
};

describe("<Header> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        context.state.datasetCount = 1;
        renderedComponent = create(
            <MemoryRouter>
                <AppContext.Provider value={context}>
                    <StyleWrapper>
                        <Header image={hdr_logo_white} headerText="Title" />
                    </StyleWrapper>
                </AppContext.Provider>
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should render the correct components", () => {
            const wrapper = renderedOutput.findByType(HeaderWrapper);
            expect(wrapper.props.children.type).toBe(WidthWrapper);

            const HeaderAlignmentItems = wrapper.findAllByType(HeaderAlignmentItem);
            expect(HeaderAlignmentItems).toHaveLength(6);

            const HeaderTitleLink = HeaderAlignmentItems[0].props.children;
            expect(HeaderTitleLink.type).toBe(LinkNoDecoration);
            expect(HeaderTitleLink.props.to).toBe("/");

            const HeaderTitle = HeaderTitleLink.props.children;
            expect(HeaderTitle.type).toBe(InvertedHeaderText);
            expect(HeaderTitle.props.children).toBe(headerText.header);

            expect(HeaderAlignmentItems[1].props.children.type).toBe(HeaderSpacer);

            const DataSetCount = HeaderAlignmentItems[2].props.children;
            expect(DataSetCount.type).toBe(InvertedHeaderText);
            expect(DataSetCount.props.children[0]).toBe(1);
            expect(DataSetCount.props.children[1]).toBe(" datasets available");

            const Logout = HeaderAlignmentItems[3].props.children;
            expect(HeaderAlignmentItems[3].props.right).toBeTruthy();
            expect(Logout.type).toBe(HeaderLink);
            expect(Logout.props.to).toBe("/logout");
            expect(Logout.props.children.type).toBe(InvertedHeaderText);
            expect(Logout.props.children.props.children).toBe(headerText.logout);

            expect(HeaderAlignmentItems[4].props.right).toBeTruthy();
            expect(HeaderAlignmentItems[4].props.children.type).toBe(HeaderSpacer);

            const UserEmail = HeaderAlignmentItems[5].props.children;
            expect(HeaderAlignmentItems[5].props.right).toBeTruthy();
            expect(UserEmail.type).toBe(InvertedHeaderText);
            expect(UserEmail.props.children).toBe("test@test.com");
        });
    });
});
