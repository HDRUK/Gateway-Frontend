import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { InvertedHeaderHeading, HorizontalLargeSpace, WidthWrapper } from "../../styles/styles.js";
import { HeaderWrapper } from "../../styles/carbonComponents.js";
import { LinkNoDecoration } from "../../styles/styles.js";

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
                <LinkNoDecoration to="/">
                    <InvertedHeaderHeading>{headerText.header}</InvertedHeaderHeading>
                </LinkNoDecoration>
                <HorizontalLargeSpace />
                {appContext.state.datasetCount && (
                    <InvertedHeaderHeading>{appContext.state.datasetCount} datasets available</InvertedHeaderHeading>
                )}
                <InvertedHeaderHeading>{appContext.userEmail}</InvertedHeaderHeading>
            </WidthWrapper>
        </HeaderWrapper>
    );
};

export default AppHeader;
