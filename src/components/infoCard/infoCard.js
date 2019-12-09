import React from "react";
import PropTypes from "prop-types";
import {
    StyledSmallBoldText,
    TinyText,
    LightText,
    InfoGrid,
    GridItem,
    StyledCard,
    LinkText,
    Arrow,
    StyledLine
} from "../../styles/styles";

const InfoCard = props => {
    return (
        <StyledCard>
            {props.contents && (
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
            )}
            {props.link && (
                <React.Fragment>
                    <LinkText href="/search">
                        <div>
                            {props.contents && <StyledLine />}
                            {props.link}
                            <Arrow />
                        </div>
                    </LinkText>
                </React.Fragment>
            )}
        </StyledCard>
    );
};

InfoCard.propTypes = {
    contents: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string
        })
    ),
    link: PropTypes.string
};

export default InfoCard;
