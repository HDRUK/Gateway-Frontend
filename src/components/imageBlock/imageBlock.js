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
    height: 4rem;
    padding-top: 0.6875rem;
`;

const SmallImage = styled.img`
    display: inline-block;
    max-height: 2.625rem;
    max-width: 8rem;
    margin-right: 2rem;
    vertical-align: center;
`;

export default ImageBlock;
