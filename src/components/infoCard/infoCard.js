import React from "react";
import PropTypes from "prop-types";
import { StyledCard, LinkText, Arrow, StyledLine } from "../../styles/styles";
import InfoDetailGrid from "../../components/infoDetailGrid/infoDetailGrid";

const InfoCard = props => {
    return (
        <StyledCard>
            {props.contents && <InfoDetailGrid contents={props.contents} />}
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
