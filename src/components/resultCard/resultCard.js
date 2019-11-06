import React from "react";
import PropTypes from "prop-types";
import { Line, SmallHeading, SmallText, Card, Preview } from "../../styles/styles.js";
import { TitleBox, Arrow } from "./styles.js";

const ResultCard = props => {
    return (
        <Card>
            <TitleBox>
                <Preview>
                    <SmallHeading>{props.title}</SmallHeading>
                </Preview>
            </TitleBox>
            <Arrow />
            <Line />
            <Preview>
                <SmallText>{props.description}</SmallText>
            </Preview>
        </Card>
    );
};

ResultCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ResultCard;
