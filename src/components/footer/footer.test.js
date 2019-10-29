import React from "react";
import { create } from "react-test-renderer";
import Footer from "./footer.js";
import hdr_logo_white from "../../assets/hdruk_logo_white.png";

describe("<Footer> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(<Footer image={hdr_logo_white} />);
    });

    it("should test the Footer Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });
});
