import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { StyledImage } from "../../styles/styles.js";

const Image = props => {
    const appContext = useContext(AppContext);
    const image = appContext.images[props.identifier];

    return <StyledImage alt="logo" src={image}></StyledImage>;
};

Image.propTypes = {
    identifier: PropTypes.node
};
export default Image;
