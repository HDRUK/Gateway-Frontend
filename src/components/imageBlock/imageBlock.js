import React from "react";
// import PropTypes from "prop-types";

import { ImageBlockWrapper, SmallImage } from "../../styles/styles.js";

import hdruk_logo_black from "../../assets/hdruk_black.png";

const ImageBlock = () => (
    <ImageBlockWrapper>
        <SmallImage src={hdruk_logo_black} />
        <SmallImage src={hdruk_logo_black} />
        <SmallImage src={hdruk_logo_black} />
    </ImageBlockWrapper>
);

export default ImageBlock;
