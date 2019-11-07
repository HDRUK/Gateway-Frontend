import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NewsTileWrapper } from "./styles.js";
import { ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const newsTileText = {
    readMore: "Read more"
};

const NewsTile = props => {
    const appContext = useContext(AppContext);
    const newsItem = appContext.newsItems[props.identifier];

    return (
        <NewsTileWrapper>
            <ImageSection src={newsItem.image} />
            <TextSection>
                <Description>{newsItem.description}</Description>
                {newsItem.readMore && <ReadMore href={newsItem.readMore}>{newsTileText.readMore}</ReadMore>}
            </TextSection>
        </NewsTileWrapper>
    );
};

NewsTile.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default NewsTile;
