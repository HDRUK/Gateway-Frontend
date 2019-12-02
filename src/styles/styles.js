import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import "../carbon-components.css";
import hdruk_logo_white from "../assets/hdruk_logo_white.png";

export const colorTheme = {
    white: "#ffffff",
    lightText: "#979797",
    darkText: "#3c3c3b",
    blueText: "#0f62fe",
    darkBlue: "#002d9c",
    labelText: "#161616",
    error: "#da1e28"
};

export const Heading = styled.h1`
    font-size: 2.25rem;
    font-weight: 100;
    line-height: 2.7rem;
`;

export const ParagraphHeading = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem;
    color: #3c3c3b;
`;

export const InvertedParagraphHeading = styled(ParagraphHeading)`
    color: white;
`;

export const InvertedHeaderHeading = styled(InvertedParagraphHeading)`
    font-weight: 500;
`;

export const ParagraphText = styled.p`
    font-size: 1.4rem;
    font-weight: 100;
    line-height: 1.7rem;
    color: ${colorTheme.darkText};
`;

export const InfoGrid = styled.div`
    display: flex;
`;

export const GridItem = styled.div`
    flex-direction: column;
    padding-right: 3rem;
`;

export const BlueText = styled.span`
    color: ${colorTheme.blueText};
`;

export const LightText = styled.span`
    color: ${colorTheme.lightText};
`;

export const DarkText = styled.span`
    color: ${colorTheme.darkText};
`;

export const BoldInlineText = styled.p`
    display: inline;
    font-weight: 700;
`;

export const InlineWrappedText = styled.p`
    display: inline;
    font-weight: 400;
    white-space: pre-line;
`;

export const NewListItem = styled.li`
    font-size: 1.5rem;
    font-weight: 100;
    padding: 5px;
    list-style-type: disc;
    list-style-position: inside;
`;

export const FilterBlockTitle = styled.li`
    padding: 0.375rem 0 0.375rem 0.5rem;
    font-weight: 700;
`;

export const LinkText = styled.a`
    text-decoration: underline;
`;

export const CenterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TinySpace = styled.div`
    padding: 0.5rem;
`;
export const SmallSpace = styled.div`
    padding: 1rem;
`;
export const MediumSpace = styled.div`
    padding: 2rem;
`;

export const LargeSpace = styled.div`
    padding: 5rem;
`;

export const SmallHeading = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
`;

export const SmallText = styled.p`
    font-size: 0.9rem;
    line-height: 1.125rem;
`;

export const TinyText = styled.span`
    font-size: 0.75rem;
`;

export const Bold = styled.span`
    font-weight: 700;
`;

export const LabelText = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    color: ${colorTheme.labelText};
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
`;

export const Line = styled.div`
    height: 0.0625rem;
    margin: 1rem 0 0.5rem 0;
    background-color: black;
`;

export const NavPadding = styled.div`
    padding: 1rem 1rem 0 1rem;
`;

export const MenuLine = styled.div`
    position: relative;
    width: calc(100% - 3rem);
    left: 1rem;
    background-color: #525252;
    height: 1px;
    margin: 1rem 0rem 2rem 0rem;
`;

export const SelectedFilter = styled.div`
    height: 24px;
    border-radius: 18px;
    background-color: #d5d9e0;
    display: inline-flex;
`;

export const CloseButton = styled.button`
    margin-left: 10px;
    background: none;
    border: none;
    padding-bottom: 5px;
`;

export const SideStripe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1rem;
    background-color: #e5e5e5;
`;

export const SideStripeLeft = styled(SideStripe)`
    left: 0;
`;

export const SideStripeRight = styled(SideStripe)`
    right: 0;
`;

export const ContentWrapper = styled.div`
    position: relative;
    padding: 1rem 1rem 0 1rem;
    background-color: #ffffff;
    display: inline-block;
    width: ${p => (p.nav ? "calc(100% - 16rem)" : "100%")};
    left: ${p => (p.nav ? "16rem" : "0")};
    min-height: 40rem;
    vertical-align: top;
`;

export const LinkNoDecoration = styled(Link)`
    text-decoration: none;
`;

export const Logo = styled.img.attrs({
    src: hdruk_logo_white
})``;

export const SocialMediaLogo = styled.div`
    display: inline-block;
    max-width: 2rem;
    max-height: 2rem;
    fill: #ffffff;
    margin-right: 0.5rem;
`;
export const NewsTileWrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 18rem;
`;

export const ImageSection = styled.div`
    height: 12rem;
    background-color: #64696c;
`;

export const TextSection = styled.div`
    box-sizing: border-box;
    height: 6rem;
    background-color: #b5bcbd;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
`;

export const Description = styled.div`
    height: 3rem;
    max-height: 3rem;
`;

export const ReadMore = styled.a`
    display: block;
    color: #2e66a2;
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: none;
`;

export const ImageBlockWrapper = styled.div`
    height: 4rem;
    padding-top: 0.6875rem;
`;

export const SmallImage = styled.div`
    display: inline-flex;
    max-height: 2.625rem;
    max-width: 8rem;
    margin-right: 2rem;
    vertical-align: center;
`;

export const StyledImage = styled.img`
    max-width: inherit;
`;

export const NewsTileItem = styled.div`
    display: inline-block;
    margin-right: 2rem;

    :last-child {
        margin-right: 0;
    }
`;

export const FooterWrapper = styled.div`
    height: 12rem;
    padding-bottom: 1rem;
    background-color: rgb(60, 60, 59);
    color: white;
    padding-left: 7rem;
    font-size: 1.1rem;
    position: relative;
`;

export const FooterBlock = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    height: 90%;
    vertical-align: top;
    padding: 3rem 5rem 0 0;
`;

export const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

export const FooterImage = styled(Logo)`
    max-width: 8rem;
    max-height: 5rem;
`;

export const HeaderImage = styled(Logo)`
    max-width: 4.5rem;
    max-height: 3rem;
    margin: 0 3rem 0 4rem;
    vertical-align: middle;
`;

export const AppWrapper = styled.div`
    min-width: 48rem;
    max-width: 66rem;
    margin: 0 auto 0;
`;

export const PageWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

export const FloatRight = styled.div`
    float: right;
    display: inline-flex;
`;

export const Card = styled.div`
    position: relative;
    min-height: 4rem;
    margin-bottom: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    padding: 1rem;
    overflow: hidden;
`;

export const Preview = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ButtonSet = styled.div`
    flex-direction: row;
`;

export const FilterBoxContent = styled.div`
    padding: 10px;
`;

export const FilterBlock = styled.div`
    flex-wrap: wrap;
    display: inline-flex;
    flex-direction: column;
    max-height: 7rem;
    > div {
        margin-top: 0 !important;
    }
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-right: 2rem solid #f4f4f4;
    left: -2rem;
    top: 1rem;
    position: absolute;
`;

export const FilterDiv = styled.div`
    ${props =>
        props.modalVisibility &&
        props.location &&
        css`
            flex-direction: column;
            z-index: 10;
            left: 1rem;
            display: inline-flex;
            position: absolute;
            background-color: #f4f4f4;
            top: ${props.location - 110}px;
            transition: 0s;
        `};
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 32rem;
    max-height: calc(100vh - 17rem);
    overflow: scroll;
    padding: 0.25rem 1rem 0 1rem;
`;
