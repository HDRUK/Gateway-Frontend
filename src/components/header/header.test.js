import React from "react";
import { create } from "react-test-renderer";
import { MemoryRouter, Link } from "react-router-dom";
import Header from "./header.js";
import { InvertedHeaderHeading, HeaderImage } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import hdr_logo_white from "../../assets/hdruk_logo_white.png";

describe("<Header> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <MemoryRouter>
                <Header image={hdr_logo_white} headerText="Title" />
            </MemoryRouter>
        );
        renderedOutput = renderedComponent.root;
    });

    describe("when the header is rendered", () => {
        it("should have the correct destination for the header image", () => {
            const link = renderedOutput.findAllByType(Link);
            const imageDestination = link[0].props.to;
            expect(imageDestination).toBe("/");
        });
        it("should render the correct components", () => {
            const wrappers = renderedOutput.findAllByType(HeaderWrapper);
            const links = renderedOutput.findAllByType(Link);
            const images = renderedOutput.findAllByType(HeaderImage);
            const headings = renderedOutput.findAllByType(InvertedHeaderHeading);

            expect(wrappers).toHaveLength(1);
            expect(links).toHaveLength(1);
            expect(images).toHaveLength(1);
            expect(headings).toHaveLength(1);
        });
    });
});
