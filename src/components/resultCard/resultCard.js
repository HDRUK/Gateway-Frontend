import React from "react";
import PropTypes from "prop-types";
import { SmallHeading, SmallText, StyledCard, Preview } from "../../styles/styles.js";
import { TitleBox, Arrow } from "./styles.js";
import InfoDetailGrid from "../infoDetailGrid/infoDetailGrid.js";

const ResultCard = props => {
    return (
        <StyledCard>
            <TitleBox>
                <Preview>
                    <SmallHeading>{props.title}</SmallHeading>
                </Preview>
            </TitleBox>
            <Arrow />
            <InfoDetailGrid
                contents={[{ title: props.detail[0].toUpperCase(), content: props.detail[1] }]}
            ></InfoDetailGrid>
            <Preview>
                <SmallText>{props.description}</SmallText>
            </Preview>
        </StyledCard>
    );
};

ResultCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    detail: PropTypes.array.isRequired
};

export default ResultCard;
