import React, { useContext } from "react";

import { AppContext } from "../../HOC/AppContext/AppContext.js";

const DetailPage = () => {
    const appContext = useContext(AppContext);
    return <p>{appContext.state.searchResultId}</p>;
};

export default DetailPage;
