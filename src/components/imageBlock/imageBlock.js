import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import hdruk_logo_black from "../../assets/hdruk_black.png";

const ImageBlock = () => (
    <ImageBlockWrapper>
        <SmallImage src={hdruk_logo_black} />
        <SmallImage src={hdruk_logo_black} />
        <SmallImage src={hdruk_logo_black} />
    </ImageBlockWrapper>
);

const ImageBlockWrapper = styled.div`
    max-height: 6rem;
`;

const SmallImage = styled.img`
    display: inline-block;
    height: 100%;
    max-width: 8rem;
    margin-right: 2rem;
`;

export default ImageBlock;
