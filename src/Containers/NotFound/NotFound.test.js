import React from "react";
import { create } from "react-test-renderer";

import NotFound from "./NotFound";

import { SmallSpace, DarkText } from "../../styles/styles";

describe("<NotFound> rendered", () => {
    let renderedComponent;
    let renderedOutput;

    beforeAll(() => {
        renderedComponent = create(<NotFound />);
        renderedOutput = renderedComponent.root;
    });

    it("should initially render the Does not exist text", () => {
        const SmallSpaceDisplay = renderedOutput.findAllByType(SmallSpace);
        expect(SmallSpaceDisplay).toHaveLength(1);

        const darkTextDisplay = renderedOutput.findAllByType(DarkText);
        expect(darkTextDisplay).toHaveLength(1);

        expect(darkTextDisplay[0].children[0].props.children).toEqual("This page does not exist........");
    });
});
