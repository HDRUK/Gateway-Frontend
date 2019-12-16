import React from "react";
import { create } from "react-test-renderer";
import ResultCard from "./resultCard";
import { SmallHeading, SmallText, StyledCard, Preview } from "../../styles/styles.js";
import InfoDetailGrid from "../infoDetailGrid/infoDetailGrid.js";
import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { TitleBox, Arrow } from "./styles.js";

const text = {
    title: "Title",
    description: "Description"
};

describe("<ResultCard> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <StyleWrapper>
                <ResultCard title={text.title} description={text.description} />
            </StyleWrapper>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should check the correct components are rendered", () => {
        const card = renderedOutput.findAllByType(StyledCard);
        expect(card).toHaveLength(1);

        const cardChilren = card[0].props.children;
        const titleBox = cardChilren[0];
        const arrow = cardChilren[1];
        const line = cardChilren[2];
        const descriptionPreview = cardChilren[3];

        expect(titleBox.type).toBe(TitleBox);
        expect(arrow.type).toBe(Arrow);
        expect(line.type).toBe(InfoDetailGrid);
        expect(descriptionPreview.type).toBe(Preview);

        const titlePreview = titleBox.props.children;
        const smallHeading = titlePreview.props.children;

        expect(titlePreview.type).toBe(Preview);
        expect(smallHeading.type).toBe(SmallHeading);

        const smallText = descriptionPreview.props.children;
        expect(smallText.type).toBe(SmallText);
    });

    it("should contain the correct content", () => {
        const smallHeading = renderedOutput.findAllByType(SmallHeading);
        const smallText = renderedOutput.findAllByType(SmallText);

        expect(smallHeading[0].props.children).toBe(text.title);
        expect(smallText[0].props.children).toBe(text.description);
    });
});
