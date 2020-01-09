import React from "react";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";
import { FooterWrapper, FooterContent, FooterBlock, FooterText, FooterImage } from "./styles.js";
import { SocialMediaLogo, TinyText, WhiteLink } from "../../styles/styles.js";

const footerText = {
    followUs: "Follow us on social media",
    visitHDRWebsite: "Visit the HDR UK Site",
    contactUs: "Contact us",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms and conditions",
    copyright: "©HDR UK 2020. All rights reserved.X"
};

const links = {
    twitter: "https://twitter.com/HDR_UK",
    linkedIn: "https://www.linkedin.com/company/healthdataresearchuk/",
    hdr: "https://www.hdruk.ac.uk/",
    contact: "support@healthdatagateway.org",
    terms: "https://www.hdruk.ac.uk/infrastructure/gateway/terms-and-conditions/",
    privacy: "https://www.hdruk.ac.uk/infrastructure/gateway/privacy-policy/"
};

const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <FooterBlock>
                <FooterImage />
            </FooterBlock>
            <FooterBlock>
                <FooterText>{footerText.followUs}</FooterText>
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
                <WhiteLink href={links.hdr} target="_blank" rel="noopener noreferrer">
                    <FooterText>{footerText.visitHDRWebsite}</FooterText>
                </WhiteLink>
                <WhiteLink href={`mailto:${links.contact}`}>
                    <FooterText>{footerText.contactUs}</FooterText>
                </WhiteLink>
                <WhiteLink href={links.terms} target="_blank" rel="noopener noreferrer">
                    <FooterText>{footerText.termsAndConditions}</FooterText>
                </WhiteLink>
                <WhiteLink href={links.privacy} target="_blank" rel="noopener noreferrer">
                    <FooterText>{footerText.privacyPolicy}</FooterText>
                </WhiteLink>
            </FooterBlock>
            <TinyText>{footerText.copyright}</TinyText>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
