import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import AppSideNav from "./appSideNav.js";

describe("<AppSideNav> ", () => {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = create(
            <BrowserRouter initialEntries={["/search"]}>
                <AppSideNav />
            </BrowserRouter>
        );
    });

    it("should test the AppSideNav Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    // Is this kind of test required / how do we implement this?
    // it("should switch content to about when clicking 'about' link", () => {
    //     console.log(history, location);
    //     const aboutLink = renderedComponent.root.findByProps({ href: "/about" });
    //     act(() => aboutLink.props.navigate());
    //     console.log(history, location);

    //     // expect(history.location.pathname).toBe("/about");
    // });
});
