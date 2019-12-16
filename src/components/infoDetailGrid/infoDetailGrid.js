import React from "react";
import PropTypes from "prop-types";
import { StyledSmallBoldText, TinyText, LightText, InfoGrid, GridItem } from "../../styles/styles";

const InfoDetailGrid = props => {
    return (
        <InfoGrid>
            {props.contents.map((item, i) => (
                <GridItem key={`item-${i}`}>
                    <TinyText>
                        <LightText>{item.title.toUpperCase()}</LightText>
                    </TinyText>
                    <StyledSmallBoldText>{item.content}</StyledSmallBoldText>
                </GridItem>
            ))}
        </InfoGrid>
    );
};

InfoDetailGrid.propTypes = {
    contents: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string
        })
    )
};

export default InfoDetailGrid;
