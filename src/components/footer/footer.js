import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";

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

const Footer = props => (
    <FooterWrapper>
        <FooterBlock>
            <FooterImage src={props.image} />
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
        <CopyrightText>{text.copyright}</CopyrightText>
    </FooterWrapper>
);

Footer.propTypes = {
    image: PropTypes.string.isRequired
};

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

const CopyrightText = styled.text`
    font-size: 0.75rem;
`;

const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

const FooterImage = styled.img`
    max-width: 8rem;
    max-height: 5rem;
`;

const SocialMediaLogo = styled.div`
    display: inline-block;
    max-width: 2rem;
    max-height: 2rem;
    fill: #ffffff;
    margin-right: 0.5rem;
`;

export default Footer;
