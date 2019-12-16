import React from "react";

import {
    PageWrapper,
    contentWrapper,
    ParagraphText,
    DarkText,
    SmallSpace,
    MediumSpace,
    NewListItem
} from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    para1:
        "To find relevant datasets, enter your keyword searches into the search bar at the top of the page or browse through the catalogue by clicking onto the ‘Browse’ tab.",
    para2:
        "Once you have used the keyword search, or browsed the catalogue, a summary card for each relevant dataset will be displayed in a list view. By clicking onto each result, you can view a detailed summary of each dataset and, if appropriate, request access. In addition, you are able to sort the search results by date published or further filter by using the following topics:",
    para3:
        "In order to request access to datasets, you will need tohave signed in using your institutional single sign-on. To sign in, you can either click the ‘Log in’ button at the top of this page, or by navigating to the top right-hand corner of each page once you have entered the gateway.",
    para4:
        "If you are logged in, you are also able to save your search terms with any applied filters. To access your saved searches, navigate to ‘Search History' tab on the top left-hand corner of the screen.",
    para5:
        "You can track the complete list of your dataset requests by navigating to the ‘Search History’ tab and clicking on ‘Track Requests’. If you need to contact the Data Custodian, their contact details can also be found on this page.",
    bullet1: "License",
    bullet2: "Publisher",
    bullet3: "Physical Samples",
    bullet4: "Age Band",
    bullet5: "Geographic Coverage",
    bullet6: "Jurisdiction"
};
const GuidelinesGeneral = () => {
    return (
        <PageWrapper>
            <contentWrapper>
                <DarkText>
                    <ParagraphText>{textItems.para1}</ParagraphText>
                    <SmallSpace />
                    <ParagraphText>{textItems.para2}</ParagraphText>
                    <SmallSpace />
                    <ParagraphBullets>
                        <NewListItem>{textItems.bullet1}</NewListItem>
                        <NewListItem>{textItems.bullet2}</NewListItem>
                        <NewListItem>{textItems.bullet3}</NewListItem>
                        <NewListItem>{textItems.bullet4}</NewListItem>
                        <NewListItem>{textItems.bullet5}</NewListItem>
                        <NewListItem>{textItems.bullet6}</NewListItem>
                    </ParagraphBullets>
                    <SmallSpace />
                    <ParagraphText>{textItems.para3}</ParagraphText>
                    <SmallSpace />
                    <ParagraphText>{textItems.para4}</ParagraphText>
                    <SmallSpace />
                    <ParagraphText>{textItems.para5}</ParagraphText>
                    <MediumSpace />
                </DarkText>
            </contentWrapper>
        </PageWrapper>
    );
};

export default GuidelinesGeneral;
