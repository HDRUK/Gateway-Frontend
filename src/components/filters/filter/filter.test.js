import React from "react";
import { create } from "react-test-renderer";
import Filter from "./filter.js";

import { CheckboxItem } from "../../../styles/carbonComponents.js";
import { AppContext } from "../../../HOC/AppContext/AppContext.js";
import context from "../../../__mocks__/AppContextMock.js";

describe("<Filter> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <Filter />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct elements are displayed", () => {
        const checkboxItems = renderedOutput.findAllByType(CheckboxItem);
        expect(checkboxItems).toHaveLength(1);
    });
});
