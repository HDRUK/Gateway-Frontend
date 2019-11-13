import { Link } from "react-router-dom";
import styled from "styled-components";
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

const DarkText = styled.span`
    color: #3c3c3b;
`;

const NewListItem = styled.li`
    font-size: 1.5rem;
    font-weight: 100;
    padding: 5px;
    list-style-type: disc;
    list-style-position: inside;
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
    padding: 1rem;
`;

const MediumSpace = styled.div`
    padding: 2rem;
`;

const LargeSpace = styled.div`
    padding: 5rem;
`;

const SmallHeading = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
`;

const SmallText = styled.p`
    font-size: 0.9rem;
    line-height: 1.125rem;
`;

const TinyText = styled.span`
    font-size: 0.75rem;
`;

const Bold = styled.span`
    font-weight: 700;
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

const Line = styled.div`
    height: 0.0625rem;
    margin: 1rem 0 0.5rem 0;
    background-color: black;
`;

const NavPadding = styled.div`
    padding: 1rem 1rem 0 1rem;
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
    padding: 1rem 1rem 0 1rem;
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

const HeaderImage = styled(Logo)`
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

const AppWrapper = styled.div`
    min-width: 48rem;
    max-width: 66rem;
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

const Card = styled.div`
    position: relative;
    min-height: 4rem;
    margin-bottom: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    padding: 1rem;
    overflow: hidden;
`;

const Preview = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export {
    Heading,
    SmallHeading,
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
    SmallText,
    TinyText,
    Bold,
    Line,
    MenuLine,
    NavPadding,
    ContentWrapper,
    LinkNoDecoration,
    Logo,
    SocialMediaLogo,
    ImageSection,
    TextSection,
    Description,
    ReadMore,
    ImageBlockWrapper,
    SmallImage,
    NewsTileItem,
    StyledImage,
    HeaderImage,
    AppWrapper,
    PageWrapper,
    LabelText,
    FloatRight,
    Card,
    Preview
};
