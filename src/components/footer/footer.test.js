import React from "react";
import { create } from "react-test-renderer";
import Footer from "./footer.js";

import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";
import { SocialMediaLogo, TinyText, FooterWrapper, FooterBlock, FooterText, FooterImage } from "../../styles/styles.js";

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

describe("<Footer> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(<Footer />);
        renderedOutput = renderedComponent.root;
    });

    it("should render footer components", () => {
        const footerWrapper = renderedOutput.findByType(FooterWrapper);
        const footerBlocks = footerWrapper.findAllByType(FooterBlock);

        expect(footerBlocks).toHaveLength(3);
        expect(footerBlocks[0].findAllByType(FooterImage)).toHaveLength(1);

        const block2Content = {
            footerText: footerBlocks[1].findByType(FooterText),
            socialMediaLogos: footerBlocks[1].findAllByType(SocialMediaLogo)
        };
        expect(block2Content.footerText.props.children).toEqual(text.followUs);
        const twitterLink = block2Content.socialMediaLogos[0].findByType("a");
        expect(twitterLink.props.href).toEqual(links.twitter);
        expect(twitterLink.props.target).toEqual("_blank");
        expect(twitterLink.props.rel).toEqual("noopener noreferrer");
        block2Content.socialMediaLogos[0].findByType(LogoTwitter32);
        const linkedInLink = block2Content.socialMediaLogos[1].findByType("a");
        expect(linkedInLink.props.href).toEqual(links.linkedIn);
        expect(linkedInLink.props.target).toEqual("_blank");
        expect(linkedInLink.props.rel).toEqual("noopener noreferrer");
        block2Content.socialMediaLogos[1].findByType(LogoLinkedin32);

        const block3Texts = footerBlocks[2].findAllByType(FooterText);
        expect(block3Texts).toHaveLength(4);
        expect(block3Texts[0].props.children).toEqual(text.visitHDRWebsite);
        expect(block3Texts[1].props.children).toEqual(text.contactUs);
        expect(block3Texts[2].props.children).toEqual(text.accessibilityStatement);
        expect(block3Texts[3].props.children).toEqual(text.termsAndConditions);

        const tinyText = footerWrapper.findAllByType(TinyText);
        expect(tinyText).toHaveLength(1);
        expect(tinyText[0].props.children).toEqual(text.copyright);
    });
});
