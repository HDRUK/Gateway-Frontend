import React from "react";

import { ParagraphText, DarkText, SmallSpace, MediumSpace, NewListItem } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    para1: "To find relevant datasets, enter your free-text searches into the search bar at the top of the page.",
    para2:
        "Once you have used the free-text search, a summary card for each relevant dataset will be displayed in a list view. By clicking onto each result, you can view a detailed metadata summary of each dataset and, if appropriate, enquire about  access. In addition, you are able to sort the search results by date published or further refine by using the following filters:",

    bullet1: "License",
    bullet2: "Publisher",
    bullet3: "Physical Samples",
    bullet4: "Age Band",
    bullet5: "Geographic Coverage",
    bullet6: "Jurisdiction",
    para3:
        "In order to enquire about  access to datasets, you will need to have signed in using your institutional single sign-on. To sign in, click the ‘Log in’ button at the top of this page, or navigate to the top right-hand corner of each page once you have entered the Gateway.",
    para4:
        "If you are logged in, you are able to save your search with any applied filters. To access your saved searches, navigate to ‘Search History' tab on the top left-hand corner[1]  of the screen.",
    para5:
        "You can track the complete list of any dataset enquiries  you have made by navigating to the ‘Search History’ tab and clicking on ‘Track Data AccessEnquiries’. If you need to contact the Data Custodian, their contact details can also be found on this page."
};
const GuidelinesGeneral = () => {
    return (
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
    );
};

export default GuidelinesGeneral;
