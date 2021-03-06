import React from "react";
import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";
import ParagraphBanner from "../../components/paragraphBanner/paragraphBanner.js";
import mainImage from "../../assets/landing_page_image_1.png";
import CookieConsent from "react-cookie-consent";

import { LandingPageWrapper, ParagraphIcon, PartnerImage } from "./styles.js";
import {
    Heading2,
    ParagraphHeading,
    ParagraphHeading3,
    DarkText,
    SmallInlineSpace,
    SmallSpace,
    MediumSpace,
    ParagraphText,
    ParagraphTextHero,
    ParagraphAndHeaderBox,
    ParagraphBox,
    MainImage,
    CenterBlock
} from "../../styles/styles.js";

import { Search32, Send32, Locked32 } from "@carbon/icons-react";

const imageItems = [
    "partnerLogo1",
    "partnerLogo2",
    "partnerLogo3",
    "partnerLogo4",
    "partnerLogo5",
    "partnerLogo6",
    "partnerLogo7",
    "partnerLogo8",
    "partnerLogo9",
    "partnerLogo10",
    "partnerLogo11",
    "partnerLogo12",
    "partnerLogo13",
    "partnerLogo14",
    "partnerLogo15",
    "partnerLogo16"
];
const textItems = {
    landingFirstParaHeading: "What is the Innovation Gateway?",
    landingFirstPara:
        "Welcome to the Health Data Research Innovation Gateway – phase one. This is a portal to find and enquire about access to UK health datasets for research.  The Innovation Gateway provides detailed descriptions of these datasets, which you can search, browse and enquire about access.  It does not hold or store any patient or health data. ",
    landingSecondPara:
        "The Innovation Gateway is being developed by Health Data Research UK as part of the Digital Innovation Hub Programme. This phase one version provides limited functionality and will be updated further. ",
    bannerFirstTitle: "Discover",
    bannerFirstPara:
        "The Innovation Gateway allows you to quickly discover and identify health related datasets.  Use a keyword search or browse to get more detailed descriptions of the datasets that interest you. You can sort, filter and search results to find what you need.",
    bannerSecondTitle: "Enquire",
    bannerSecondPara:
        "The current version of the Innovation Gateway only supports access request enquiries from researchers and innovators with an OpenAthens account. All data access request enquiries are sent to the relevant data custodian(s) for consideration.",
    bannerThirdTitle: "Security",
    bannerThirdPara: "The Innovation Gateway supports members of the ",
    bannerThirdParalink: "http://www.ukhealthdata.org/",
    bannerThirdParalinktext: "UK Health Data Research Alliance",
    bannerThirdParaa:
        ", who have subscribed to the secure safeguarding of personal health data and responsible access to this data for research and innovation, in line with existing UK legislation.",
    partnersHeading: "UK Health Data Research Alliance members include:"
};

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <MediumSpace />
            <DarkText>
                <ParagraphAndHeaderBox>
                    <Heading2>{textItems.landingFirstParaHeading}</Heading2>
                    <SmallSpace />
                    <ParagraphBox>
                        <ParagraphTextHero>{textItems.landingFirstPara}</ParagraphTextHero>
                        <SmallSpace />
                        <ParagraphText>{textItems.landingSecondPara}</ParagraphText>
                    </ParagraphBox>
                    <SmallSpace />
                </ParagraphAndHeaderBox>
                <SmallInlineSpace />
                <MainImage src={mainImage} />
            </DarkText>
            <MediumSpace />
            <ParagraphBanner>
                <>
                    <ParagraphIcon>
                        <Search32 />
                    </ParagraphIcon>
                    <ParagraphAndHeaderBox>
                        <ParagraphHeading3>{textItems.bannerFirstTitle}</ParagraphHeading3>
                        <SmallSpace />
                        <ParagraphBox>
                            <ParagraphText>{textItems.bannerFirstPara}</ParagraphText>
                        </ParagraphBox>
                    </ParagraphAndHeaderBox>
                </>

                <>
                    <ParagraphIcon>
                        <Send32 />
                    </ParagraphIcon>
                    <ParagraphAndHeaderBox>
                        <ParagraphHeading3>{textItems.bannerSecondTitle}</ParagraphHeading3>
                        <SmallSpace />
                        <ParagraphBox>
                            <ParagraphText>{textItems.bannerSecondPara}</ParagraphText>
                        </ParagraphBox>
                    </ParagraphAndHeaderBox>
                </>

                <>
                    <ParagraphIcon>
                        <Locked32 />
                    </ParagraphIcon>
                    <ParagraphAndHeaderBox>
                        <ParagraphHeading3>{textItems.bannerThirdTitle}</ParagraphHeading3>
                        <SmallSpace />
                        <ParagraphBox>
                            <ParagraphText>
                                {textItems.bannerThirdPara}
                                <a href={textItems.bannerThirdParalink} target="_blank" rel="noopener noreferrer">
                                    {textItems.bannerThirdParalinktext}
                                </a>
                                {textItems.bannerThirdParaa}
                            </ParagraphText>
                        </ParagraphBox>
                    </ParagraphAndHeaderBox>
                </>
            </ParagraphBanner>
            <MediumSpace />
            <CenterBlock>
                <ParagraphHeading>{textItems.partnersHeading}</ParagraphHeading>
            </CenterBlock>
            <SmallSpace />
            <ImageBlock>
                {imageItems.map(logo => (
                    <PartnerImage key={logo}>
                        <Image identifier={logo}></Image>
                    </PartnerImage>
                ))}
            </ImageBlock>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                enableDeclineButton
                declineButtonText="Dismiss"
                flipButtons
                cookieName="myAwesomeCookieName2"
                style={{ background: "#475DA7", height: "3.125", fontsize: "25pt" }}
                buttonStyle={{ background: "#2FBB93", color: "#ffffff" }}
                declineButtonStyle={{ background: "#ffffff", color: "#2FBB93" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </LandingPageWrapper>
    );
};

export default LandingPage;
