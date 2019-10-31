import React from "react";
import { create } from "react-test-renderer";
import Image from "./image";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<NewsTile> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <Image value={"logoHDR"} />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const image = renderedOutput.findAllByType("img");

        expect(image).toHaveLength(1);

        expect(image[0].props.src).toBe("test");
    });
});
