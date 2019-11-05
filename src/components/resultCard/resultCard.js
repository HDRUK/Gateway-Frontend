import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Line, SmallHeading, SmallText } from "../../styles/styles.js";

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

const Card = styled.div`
    position: relative;
    min-height: 6rem;
    margin-bottom: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    padding: 1rem;
    overflow: hidden;
`;

const Preview = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TitleBox = styled.div`
    display: inline-block;
    width: calc(100% - 1rem);
`;

const Arrow = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border: 0.125rem solid #000000;
    border-width: 0.06125rem 0.06125rem 0 0;
    transform: rotate(45deg);
`;

ResultCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ResultCard;
