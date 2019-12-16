import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter, Link } from "react-router-dom";
import Header from "./header.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { InvertedHeaderHeading, HeaderImage } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import hdr_logo_white from "../../assets/hdruk_logo_white.png";
import { AppContext } from "../../HOC/AppContext/AppContext";
import context from "../../__mocks__/AppContextMock.js";

describe("<Header> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
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
            expect(wrapper.children[0].props["aria-label"]).toBe("HDR UK Innovation Gateway");

            const link = wrapper.findByType(Link);
            link.findByType(HeaderImage);

            const imageDestination = link.props.to;
            expect(imageDestination).toBe("/");

            const header = wrapper.findAllByType(InvertedHeaderHeading);
            expect(header[0].children[0].props.children).toBe("Innovation Gateway");
        });
    });
});
