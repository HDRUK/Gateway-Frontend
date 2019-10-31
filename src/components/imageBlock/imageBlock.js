import React from "react";

import { ImageBlockWrapper, SmallImage } from "../../styles/styles.js";

import PropTypes from "prop-types";

const ImageBlock = props => (
    <ImageBlockWrapper>
        {props.children.map((image, i) => (
            <SmallImage key={`image-${i}`}>{image}</SmallImage>
        ))}
    </ImageBlockWrapper>
);

ImageBlock.propTypes = {
    children: PropTypes.node
};

export default ImageBlock;
