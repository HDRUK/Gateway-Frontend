import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NewsTileWrapper, ImageSection, TextSection, Description, ReadMore } from "../../styles/styles.js";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

const text = {
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
                {newsItem.readMore && <ReadMore href={newsItem.readMore}>{text.readMore}</ReadMore>}
            </TextSection>
        </NewsTileWrapper>
    );
};

NewsTile.propTypes = {
    identifier: PropTypes.string.isRequired
};

export default NewsTile;
