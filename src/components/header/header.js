import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { InvertedHeaderHeading, HeaderImage, HorizontalLargeSpace, WidthWrapper } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { Link } from "react-router-dom";

const headerText = {
    header: "Innovation Gateway"
};

const AppHeader = () => {
    const appContext = useContext(AppContext);

    const useDatasetCount = appContext.useDatasetCount;

    useDatasetCount();

    return (
        <HeaderWrapper aria-label="HDR UK Innovation Gateway">
            <WidthWrapper>
                <Link to="/">
                    <HeaderImage />
                </Link>
                <InvertedHeaderHeading>{headerText.header}</InvertedHeaderHeading>
                <HorizontalLargeSpace />
                <InvertedHeaderHeading>{appContext.state.datasetCount}</InvertedHeaderHeading>
            </WidthWrapper>
        </HeaderWrapper>
    );
};

export default AppHeader;
