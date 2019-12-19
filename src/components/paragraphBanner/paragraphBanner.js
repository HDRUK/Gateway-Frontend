import React from "react";
import { Banner, BannerItem } from "./styles.js";
import { SmallInlineSpace } from "../../styles/styles";

export const ParagraphBannerItem = props => {
    return <BannerItem>{props.children}</BannerItem>;
};

const ParagraphBanner = props => {
    return (
        <Banner>
            {props.children.map((child, i) => (
                <React.Fragment key={`banner-${i}`}>
                    <BannerItem>{child}</BannerItem>
                    <SmallInlineSpace />
                </React.Fragment>
            ))}
        </Banner>
    );
};

export default ParagraphBanner;
