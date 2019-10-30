import React from "react";
import PropTypes from "prop-types";
import { NewsTileWrapper, ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";

const NewsTile = props => (
    <NewsTileWrapper>
        <ImageSection src={props.image} />
        <TextSection>
            <Description>{props.description}</Description>
            {props.readMore && <ReadMore href={props.readMore}>Read more</ReadMore>}
        </TextSection>
    </NewsTileWrapper>
);

NewsTile.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    readMore: PropTypes.string
};

export default NewsTile;
