import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import "../carbon-components.css";
import hdruk_logo_white from "../assets/hdruk_logo_white.png";

const Heading = styled.h1`
    font-size: 2.25rem;
    font-weight: 100;
    line-height: 2.7rem;
`;

const ParagraphHeading = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem;
    color: #3c3c3b;
`;

const InvertedParagraphHeading = styled(ParagraphHeading)`
    color: white;
`;

const InvertedHeaderHeading = styled(InvertedParagraphHeading)`
    font-weight: 500;
`;

const ParagraphText = styled.p`
    font-size: 1.4rem;
    font-weight: 100;
    line-height: 1.7rem;
    color: #3c3c3b;
`;

const DarkText = styled.text`
    color: #3c3c3b;
`;

const NewListItem = styled.li`
    font-size: 1.5rem;
    font-weight: 100;
    padding: 5px;
    list-style-type: disc;
    list-style-position: inside;
`;

const FilterBlockTitle = styled.li`
    padding: 0.375rem 0 0.375rem 0.5rem;
    font-weight: 700;
`;

const LinkText = styled.a`
    text-decoration: underline;
`;

const CenterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SmallSpace = styled.div`
    padding: 15px;
`;

const MediumSpace = styled.div`
    padding: 30px;
`;

const LargeSpace = styled.div`
    padding: 80px;
`;

const NavHeading = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 0 0 1rem;
`;

const NavText = styled.p`
    font-size: 0.8rem;
    padding: 0 1rem;
`;

const TinyText = styled.text`
    font-size: 0.75rem;
`;

const LabelText = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    color: #161616;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
`;
const MenuLine = styled.div`
    position: relative;
    width: calc(100% - 3rem);
    left: 1rem;
    background-color: #525252;
    height: 1px;
    margin: 1rem 0rem 2rem 0rem;
`;

const SideStripe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1rem;
    background-color: #e5e5e5;
`;

const SideStripeLeft = styled(SideStripe)`
    left: 0;
`;
const SideStripeRight = styled(SideStripe)`
    right: 0;
`;

const ContentWrapper = styled.div`
    position: relative;
    padding: 4rem 4rem 4rem 4rem;
    background-color: #ffffff;
    display: inline-block;
    width: ${p => (p.nav ? "calc(100% - 16rem)" : "100%")};
    left: ${p => (p.nav ? "16rem" : "0")};
    min-height: 40rem;
    vertical-align: top;
`;

const LinkNoDecoration = styled(Link)`
    text-decoration: none;
`;

const Logo = styled.img.attrs({
    src: hdruk_logo_white
})``;

const SocialMediaLogo = styled.div`
    display: inline-block;
    max-width: 2rem;
    max-height: 2rem;
    fill: #ffffff;
    margin-right: 0.5rem;
`;
const NewsTileWrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 18rem;
`;

const ImageSection = styled.div`
    height: 12rem;
    background-color: #64696c;
`;

const TextSection = styled.div`
    box-sizing: border-box;
    height: 6rem;
    background-color: #b5bcbd;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
`;

const Description = styled.div`
    height: 3rem;
    max-height: 3rem;
`;

const ReadMore = styled.a`
    display: block;
    color: #2e66a2;
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: none;
`;

const ImageBlockWrapper = styled.div`
    height: 4rem;
    padding-top: 0.6875rem;
`;

const SmallImage = styled.div`
    display: inline-flex;
    max-height: 2.625rem;
    max-width: 8rem;
    margin-right: 2rem;
    vertical-align: center;
`;

const StyledImage = styled.img`
    max-width: inherit;
`;

const NewsTileItem = styled.div`
    display: inline-block;
    margin-right: 2rem;

    :last-child {
        margin-right: 0;
    }
`;

const FooterWrapper = styled.div`
    height: 12rem;
    padding-bottom: 1rem;
    background-color: rgb(60, 60, 59);
    color: white;
    padding-left: 7rem;
    font-size: 1.1rem;
    position: relative;
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

const HeaderImage = styled(Logo)`
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

const AppWrapper = styled.div`
    width: 66rem;
    margin: 0 auto 0;
`;

const PageWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const FloatRight = styled.div`
    float: right;
    display: inline-flex;
`;
export const FilterDiv = styled.div`
    ${props =>
        props.modalVisibility &&
        css`
            width: 20rem;
            height: 20rem;
            z-index: 10;
            left: 17rem;
            display: inline-flex;
            position: absolute;
            background-color: black;
        `};
`;

export {
    Heading,
    ParagraphHeading,
    InvertedParagraphHeading,
    InvertedHeaderHeading,
    ParagraphText,
    DarkText,
    CenterBlock,
    SmallSpace,
    MediumSpace,
    LargeSpace,
    NewListItem,
    LinkText,
    SideStripe,
    SideStripeLeft,
    SideStripeRight,
    NavHeading,
    NavText,
    TinyText,
    MenuLine,
    ContentWrapper,
    LinkNoDecoration,
    Logo,
    SocialMediaLogo,
    NewsTileWrapper,
    ImageSection,
    TextSection,
    Description,
    ReadMore,
    ImageBlockWrapper,
    SmallImage,
    NewsTileItem,
    StyledImage,
    FooterWrapper,
    FooterBlock,
    FooterText,
    FooterImage,
    HeaderImage,
    AppWrapper,
    PageWrapper,
    LabelText,
    FloatRight,
    FilterBlockTitle
};
