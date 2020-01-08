import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import hdruk_logo_white from "../assets/hdruk_logo_white.png";

export const Table = styled.table`
    width: 100%;
    padding: 10px 10px 10px 10px;
    border: 1px solid ${p => p.theme.text.darkText};
`;

export const TR = styled.tr`
    padding: 10px 10px 10px 10px;
    height: 1.25rem;
    text-align: left;
`;

export const TH = styled.th`
    padding: 10px 10px 10px 10px;
    text-align: left;
    border: 1px solid ${p => p.theme.text.darkText};
`;
export const TD = styled.td`
    padding: 10px 10px 10px 10px;
    text-align: left;
    border: 1px solid ${p => p.theme.text.darkText};
`;

export const Heading = styled.h1`
    font-size: 2.75rem;
    line-height: 3.25rem;
    letter-spacing: -0.048125rem;
`;

export const Heading2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: -0.051875rem;
    text-align: left;
    color: ${p => p.theme.text.heading};
`;

export const ParagraphHeading = styled(Heading2)`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2rem;
    letter-spacing: unset;
    text-align: left;
    color: ${p => p.theme.colors.boldBlue};
`;

export const ParagraphHeading3 = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
    letter-spacing: -0.035rem;
    text-align: left;
    color: ${p => p.theme.text.heading};
`;

export const InvertedParagraphHeading = styled(ParagraphHeading)`
    color: ${p => p.theme.colors.white};
`;

export const InvertedHeaderHeading = styled(InvertedParagraphHeading)`
    font-weight: 500;
`;

export const InvertedHeaderText = styled.p`
    color: ${p => p.theme.colors.white};
    font-size: 0.875rem;
    line-height: 1.0625rem;
`;

export const ParagraphAndHeaderBox = styled.div`
    display: inline-block;
    max-width: 29rem;
    text-align: left;
`;

export const ParagraphBox = styled.div`
    display: inline-block;
    max-width: 19rem;
    text-align: left;
`;

export const ParagraphText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.1875rem;
    color: ${p => p.theme.colors.darkText};
`;

export const ParagraphTextHero = styled(ParagraphText)`
    font-weight: 500;
    color: ${p => p.theme.text.heading};
`;

export const MainImage = styled.img`
    display: inline-block;
    width: 100%;
    max-width: 33rem;
    height: 18.25rem;
    border: 0;
    background-color: ${p => p.theme.colors.border};
`;

export const InfoGrid = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-flow: wrap;
    width: 100%;
`;

export const GridItem = styled.div`
    flex-direction: column;
    padding-right: 3rem;
    padding-bottom: 0.5rem;
`;

export const BlueText = styled.span`
    color: ${p => p.theme.colors.blueText};
`;

export const LightText = styled.span`
    font-size: 0.9rem;
    line-height: 1.45rem;
    color: ${p => p.theme.colors.lightText};
`;

export const DarkText = styled.span`
    color: ${p => p.theme.colors.darkText};
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
    font-size: 1rem;
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
    text-decoration: none;
`;

export const WhiteLink = styled.a`
    text-decoration: none;
    color: #ffffff;
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

export const SmallInlineSpace = styled(SmallSpace)`
    display: inline-block;
`;

export const MediumSpace = styled.div`
    padding: 2rem;
`;

export const LargeSpace = styled.div`
    padding: 5rem;
`;

export const HorizontalLargeSpace = styled.div`
    padding: 0 5rem;
`;

export const HorizontalMediumSpace = styled.div`
    padding: 0 3rem;
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
    font-weight: 700;
`;

export const Bold = styled.span`
    font-weight: 700;
`;

export const LabelText = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    color: ${p => p.theme.text.boldBlue};
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 5px;
`;

export const Line = styled.div`
    height: 0.0625rem;
    margin: 1rem 0 0.5rem 0;
    background-color: ${p => p.theme.colors.border};
`;

export const NavPadding = styled.div`
    padding: 1rem 1rem 0 1rem;
`;

export const MenuLine = styled.div`
    position: relative;
    width: calc(100% - 3rem);
    left: 1rem;
    background-color: ${p => p.theme.colors.border};
    height: 1px;
    margin: 1rem 0rem 2rem 0rem;
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
    padding: 1rem 0.5rem 0 0.5rem;
    background-color: ${p => p.theme.colors.white};
    display: inline-block;
    width: ${p => (p.nav ? "calc(100% - 16rem)" : "100%")};
    left: ${p => (p.nav ? "16rem" : "0")};
    height: calc(100% - 15rem);
    min-height: calc(100vh - 26rem);
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
    fill: ${p => p.theme.colors.white};
    margin-right: 0.5rem;
`;
export const NewsTileWrapper = styled.div`
    display: inline-block;
    width: 18rem;
    height: 18rem;
`;

export const ImageSection = styled.img`
    height: 16.375rem;
    background-color: ${p => p.theme.colors.border};
`;

export const TextSection = styled.div`
    box-sizing: border-box;
    height: 6rem;
    background-color: ${p => p.theme.colors.white};
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
    text-align: left;
    margin: 0 auto 0;
`;

export const SmallImage = styled.div`
    display: inline-block;
    vertical-align: top;
`;

export const StyledImage = styled.img`
    width: inherit;
    max-width: inherit;
`;

export const NewsTileItem = styled.div`
    display: inline-block;
    margin-right: 2rem;
    margin-top: 2rem;

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
    max-width: 100%;
    margin: 0 auto 0;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 90rem;
    margin: 0 auto 0;
    min-height: calc(100vh - 26rem);
`;

export const WidthWrapper = styled(PageWrapper)`
    height: unset;
    min-height: unset;
`;

export const FloatRight = styled.div`
    float: right;
    display: inline-flex;
`;

export const Card = styled.div`
    position: relative;
    min-height: 4rem;
    margin-bottom: 1rem;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.125rem;
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
    padding: 10px 10px 0 10px;
    max-width: 26.875rem;
`;

export const FilterBlock = styled.div`
    width: 100%;
    min-height: 10rem;
    max-height: 20rem;
    display: inline-block;
    overflow-x: hidden;
    overflow-y: auto;
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
    flex-direction: column;
    z-index: 10;
    left: 1rem;
    display: inline-flex;
    position: absolute;
    background-color: #f4f4f4;
    transition: opacity 0.1s;
    opacity: 0;
    ${props =>
        props.modalVisibility &&
        props.location &&
        css`
            opacity: 1;
            top: ${props.location - 230}px;
            /* top: 1rem; */
            transition: opacity 0.1s;
        `};
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 32rem;
    height: ${p => (p.visible ? "calc(100vh - 14rem)" : "calc(100vh - 34.55rem)")};
    max-height: calc(100vh - 14rem);
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0.25rem 1rem 0 1rem;
`;

export const NavErrorText = styled.div`
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    color: ${p => p.theme.colors.error};
`;

export const SearchInfo = styled.div`
    padding: 0 1rem 0.5rem 1rem;
`;

export const ResultsCounter = styled.div`
    display: inline-block;
    line-height: 2.5rem;
`;

export const SortDiv = styled.div`
    display: inline-block;
    float: right;
`;

//NEW STYLES

export const StyledCard = styled.div`
    position: relative;
    margin-bottom: 1rem;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0 0rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    overflow: hidden;
    border-bottom-width: 0.05rem;
    border-color: ${p => p.theme.colors.primary};
    border-style: solid;
`;
export const StyledHeading = styled.h1`
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2.7rem;
`;

export const StyledSmallBoldText = styled.p`
    font-size: 0.9rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: ${p => p.theme.colors.boldBlue};
`;

export const StyledSmallText = styled.p`
    font-size: 0.8rem;
    line-height: 1.1rem;
`;

export const StyledLine = styled.div`
    height: 0.0625rem;
    margin: 1rem 0 1rem 0;
    background-color: ${p => p.theme.colors.border};
`;

export const RedText = styled.span`
    color: #e02020;
`;

export const ThreeColumnForm = styled.div`
    display: flex;
    width: 100%;
`;

export const OneThirdFormWidth = styled.div`
    width: 33%;
`;

export const TwoThirdFormWidth = styled.div`
    width: 66%;
`;

export const HalfFormWidth = styled.div`
    width: 50%;
`;

export const BetaWrapper = styled.div`
    background-color: #e2efea;
    width: 100%;
    height: 3rem;
    padding: 0.9rem;
    display: inline-flex;
`;

export const BetaLabel = styled.p`
    background-color: #2fbb93;
    line-height: 1.1875rem;
    padding: 0 0.2rem;
    color: #ffffff;
    font-weight: 700;
`;
