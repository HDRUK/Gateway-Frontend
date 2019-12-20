import React from "react";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";
import Image from "../../components/image/image.js";
import ParagraphBanner from "../../components/paragraphBanner/paragraphBanner.js";
import mainImage from "../../assets/landing_page_image_1.png";

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

const textItems = {
    landingFirstParaHeading: "What is the Innovation Gateway?",
    landingFirstPara:
        "Welcome to the Health Data Research Innovation Gateway. This is a portal to find and enquire about access to UK health datasets for research. The Innovation Gateway provides detailed descriptions of these datasets, which you can search, browse and enquire about access. It does not hold or store any patient or health data.",
    landingSecondPara: "The Innovation Gateway does not hold or store any patient or health data.",
    bannerFirstTitle: "Discover",
    bannerFirstPara:
        "The Innovation Gateway allows you to quickly discover and identify health related datasets. Use a keyword search to get detailed descriptions of the datasets that interest you.  You can sort, filter and search results to find what you need.",
    bannerSecondTitle: "Enquire",
    bannerSecondPara:
        "You need to be a researcher or innovator affiliated to a known organisation to enquire about access to the datasets. Sign in via OpenAthens to enquire about access to the datasets that interest you.",
    bannerThirdTitle: "Security",
    bannerThirdPara:
        "All data access enquires are sent to the relevant data custodian(s) for consideration.  The Innovation Gateway supports members of the UK Health Data Research Alliance, who have subscribed to the secure safeguarding of personal health data and responsible accessto this data for research and innovation.",
    partnersHeading: "Alliance Members include"
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
                            <ParagraphText>{textItems.bannerThirdPara}</ParagraphText>
                        </ParagraphBox>
                    </ParagraphAndHeaderBox>
                </>
            </ParagraphBanner>
            <MediumSpace />
            <NewsTileGroup>
                <NewsTile identifier="newsItemOne" />
                <NewsTile identifier="newsItemTwo" />
                <NewsTile identifier="newsItemThree" />
            </NewsTileGroup>
            <MediumSpace />
            <CenterBlock>
                <ParagraphHeading>{textItems.partnersHeading}</ParagraphHeading>
            </CenterBlock>
            <SmallSpace />
            <ImageBlock>
                <PartnerImage>
                    <Image identifier="partnerLogo1" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo2" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo3" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo4" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo5" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo6" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo7" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo8" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo9" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo10" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo11" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo12" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo13" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo14" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo15" />
                </PartnerImage>
                <PartnerImage>
                    <Image identifier="partnerLogo16" />
                </PartnerImage>
            </ImageBlock>
        </LandingPageWrapper>
    );
};

export default LandingPage;
