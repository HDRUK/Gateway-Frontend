import React from "react";

import GuidelinesGeneral from "../../components/guidelines/general";
// import GuidelinesBeforeRequest from "../../components/guidelines/beforeRequest";
// import GuidelinesRequest from "../../components/guidelines/request";
// import GuidelinesLinking from "../../components/guidelines/linking";

import { PageWrapper, contentWrapper, Heading, SmallSpace } from "../../styles/styles.js";

const textItems = {
    mainHeading: "Guidelines"
};
const GuidelinesPage = () => {
    return (
        <PageWrapper>
            <contentWrapper>
                <Heading>{textItems.mainHeading}</Heading>
                <SmallSpace />

                <div>Tab bits here</div>
                <SmallSpace />
                <GuidelinesGeneral />
            </contentWrapper>
        </PageWrapper>
    );
};

export default GuidelinesPage;
