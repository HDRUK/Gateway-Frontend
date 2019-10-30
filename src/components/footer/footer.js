import React from "react";
import styled from "styled-components";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";
import { Logo, SocialMediaLogo, TinyText } from "../../styles/styles.js";

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

const FooterWrapper = styled.div`
    height: 12rem;
    padding-bottom: 1rem;
    background-color: rgb(60, 60, 59);
    color: white;
    padding-left: 7rem;
    font-size: 1.1rem;
    position: relative;
    z-index: 10000;
`;

const FooterBlock = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    height: 90%;
    vertical-align: top;
    padding: 3rem 5rem 0 0;
`;

const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

const FooterImage = styled(Logo)`
    max-width: 8rem;
    max-height: 5rem;
`;

export default Footer;
