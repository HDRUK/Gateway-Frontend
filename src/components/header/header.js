import React, { useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { InvertedHeaderHeading, HeaderImage, LargeSpace } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

const headerText = {
    header: "Innovation Gateway"
};

const AppHeader = () => {
    const appContext = useContext(AppContext);
    // appContext.getDatasetCount();

    const getDatasetCount = appContext.getDatasetCount;
    useEffect(() => {
        getDatasetCount();
    });

    return (
        <HeaderWrapper aria-label="HDR UK Innovation Gateway">
            <Link to="/">
                <HeaderImage />
            </Link>
            <InvertedHeaderHeading>{headerText.header}</InvertedHeaderHeading>
            <LargeSpace></LargeSpace>
            <InvertedHeaderHeading>{appContext.state.datasetCount}</InvertedHeaderHeading>
        </HeaderWrapper>
    );
};

export default AppHeader;
