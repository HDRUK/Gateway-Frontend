import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Header from "./header.js";
import hdr_logo_white from "../../assets/hdruk_logo_white.png";

describe("<Header> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <BrowserRouter>
                <Header image={hdr_logo_white} headerText="Title" />
            </BrowserRouter>
        );
    });
});
