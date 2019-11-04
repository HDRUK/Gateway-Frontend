import React from "react";
import { create } from "react-test-renderer";
import NewsTileGroup from "./newsTileGroup";
import { NewsTileItem } from "../../styles/styles.js";
import NewsTile from "../newsTile/newsTile";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<NewsTileGroup> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <NewsTileGroup>
                    <NewsTile identifier="newsItemOne" />
                    <NewsTile identifier="newsItemTwo" />
                </NewsTileGroup>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct style elements are displayed", () => {
        const newsTileItem = renderedOutput.findAllByType(NewsTileItem);

        expect(newsTileItem).toHaveLength(2);
    });
});
