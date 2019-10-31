import React, { useContext } from "react";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { StyledImage } from "../../styles/styles.js";

const Image = identifier => {
    const appContext = useContext(AppContext);
    const image = appContext.images[identifier.value];

    return <StyledImage alt="logo" src={image}></StyledImage>;
};

export default Image;
