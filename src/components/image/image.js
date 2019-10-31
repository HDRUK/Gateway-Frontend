import React, { useContext } from "react";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const Image = identifier => {
    const appContext = useContext(AppContext);
    const image = appContext.images[identifier.value];

    return <img src={image}></img>;
};

export default Image;
