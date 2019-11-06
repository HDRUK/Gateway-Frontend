import React from "react";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";
import { FooterWrapper, FooterBlock, FooterText, FooterImage } from "./styles.js";
import { SocialMediaLogo, TinyText } from "../../styles/styles.js";

const text = {
    followUs: "Follow us on social media",
    visitHDRWebsite: "Visit the HDR UK Site",
    contactUs: "Contact us",
    accessibilityStatement: "Accessibility statement",
    termsAndConditions: "Terms and conditions",
    copyright: "©HDR UK 2019. All rights reserved. | Design and development by IBM IX"
};

const links = {
    twitter: "https://twitter.com/HDR_UK",
    linkedIn: "https://www.linkedin.com/company/healthdataresearchuk/"
};

const Footer = () => (
    <FooterWrapper>
        <FooterBlock>
            <FooterImage />
        </FooterBlock>
        <FooterBlock>
            <FooterText>{text.followUs}</FooterText>
            <SocialMediaLogo>
                <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                    <LogoTwitter32 />
                </a>
            </SocialMediaLogo>
            <SocialMediaLogo>
                <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">
                    <LogoLinkedin32 />
                </a>
            </SocialMediaLogo>
        </FooterBlock>
        <FooterBlock>
            <FooterText>{text.visitHDRWebsite}</FooterText>
            <FooterText>{text.contactUs}</FooterText>
            <FooterText>{text.accessibilityStatement}</FooterText>
            <FooterText>{text.termsAndConditions}</FooterText>
        </FooterBlock>
        <TinyText>{text.copyright}</TinyText>
    </FooterWrapper>
);

export default Footer;
