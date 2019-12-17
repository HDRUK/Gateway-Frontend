import React from "react";

import GuidelinesGeneral from "../../components/guidelines/general";
import GuidelinesBeforeRequest from "../../components/guidelines/beforeRequest";
import GuidelinesRequest from "../../components/guidelines/request";
import GuidelinesLinking from "../../components/guidelines/linking";

import { Heading, SmallSpace } from "../../styles/styles.js";
import { HDRTabs, HDRTab } from "../../styles/carbonComponents";

const textItems = {
    mainHeading: "Guidelines"
};
const GuidelinesPage = () => {
    return (
        <>
            <Heading>{textItems.mainHeading}</Heading>
            <SmallSpace />
            <HDRTabs>
                <HDRTab label="General">
                    <SmallSpace />
                    <GuidelinesGeneral />
                </HDRTab>
                <HDRTab label="Before Requesting">
                    <SmallSpace />
                    <GuidelinesBeforeRequest />
                </HDRTab>
                <HDRTab label="Requesting Access">
                    <SmallSpace />
                    <GuidelinesRequest />
                </HDRTab>
                <HDRTab label="Linking Datasets">
                    <SmallSpace />
                    <GuidelinesLinking />
                </HDRTab>
            </HDRTabs>
        </>
    );
};

export default GuidelinesPage;
