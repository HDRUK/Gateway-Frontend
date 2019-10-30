import React, { useContext } from "react";
import { NewsTileWrapper, ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const NewsTile = identifier => {
    const appContext = useContext(AppContext);
    const newsItem = appContext.newsItems[identifier.value];
    console.log(newsItem);

    return (
        <NewsTileWrapper>
            <ImageSection src={newsItem.image} />
            <TextSection>
                <Description>{newsItem.description}</Description>
                {newsItem.readMore && <ReadMore href={newsItem.readMore}>Read more</ReadMore>}
            </TextSection>
        </NewsTileWrapper>
    );
};

export default NewsTile;
