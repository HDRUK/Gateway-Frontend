// import { Font } from "../../styles/styles.js";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";

const Footer = props => (
    <FooterWrapper>
        <FooterBlock>
            <FooterImage src={props.image} />
        </FooterBlock>
        <FooterBlock>
            <FooterText>Follow us on social media</FooterText>
            <SocialMediaLogo>
                <a href="https://twitter.com/HDR_UK" target="_blank" rel="noopener noreferrer">
                    <LogoTwitter32 />
                </a>
            </SocialMediaLogo>
            <SocialMediaLogo>
                <a href="https://www.linkedin.com/company/healthdataresearchuk/">
                    <LogoLinkedin32 />
                </a>
            </SocialMediaLogo>
        </FooterBlock>
        <FooterBlock>
            <FooterText>Visit the HDR UK Site</FooterText>
            <FooterText>Contact us</FooterText>
            <FooterText>Accessibility statement</FooterText>
            <FooterText>Terms and conditions</FooterText>
        </FooterBlock>
        <CopyrightText>©HDR UK 2019. All rights reserved. | Design and development by IBM IX</CopyrightText>
    </FooterWrapper>
);

Footer.propTypes = {
    image: PropTypes.string.isRequired
};

const FooterWrapper = styled.div`
    height: 12rem;
    background-color: rgb(60, 60, 59);
    color: white;
    padding-left: 6rem;
    font-size: 1.1rem;
`;

const FooterBlock = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    height: 90%;
    vertical-align: top;
    padding: 3rem 6rem 0 0;
`;

const CopyrightText = styled.text`
    font-size: 0.75rem;
`;

const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

const FooterImage = styled.img`
    max-width: 10rem;
    max-height: 6rem;
`;

const SocialMediaLogo = styled.div`
    display: inline-block;
    max-width: 2rem;
    max-height: 2rem;
    fill: #ffffff;
    margin-right: 0.5rem;
`;

export default Footer;
