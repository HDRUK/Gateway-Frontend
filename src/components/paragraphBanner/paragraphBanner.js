import React from "react";
import { Banner, BannerItem } from "./styles.js";
import { SmallInlineSpace } from "../../styles/styles";

export const ParagraphBannerItem = props => {
    return <BannerItem>{props.children}</BannerItem>;
};

const ParagraphBanner = props => {
    return (
        <Banner>
            {props.children.map(child => (
                <>
                    <BannerItem>{child}</BannerItem>
                    <SmallInlineSpace />
                </>
            ))}
        </Banner>
    );
};

export default ParagraphBanner;
