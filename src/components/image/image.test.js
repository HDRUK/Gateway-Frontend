import React from "react";
import { create } from "react-test-renderer";
import Image from "./image";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<Image> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <Image identifier={"logoHDR"} />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const image = renderedOutput.findByType("img");

        expect(image.props.src).toBe("test");
    });
});
