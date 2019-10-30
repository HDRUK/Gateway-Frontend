import { Link } from "react-router-dom";
import styled from "styled-components";
import "../carbon-components.css";

const DarkText = styled.text`
    color: #3c3c3b;
`;

const ParagraphText = styled.p`
    font-size: 1.5rem;
    font-weight: 100;
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

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 100;
`;

const ParagraphHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`;

const InvertedParagraphHeading = styled(ParagraphHeading)`
    color: white;
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

export {
    Heading,
    ParagraphHeading,
    InvertedParagraphHeading,
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
    MenuLine,
    ContentWrapper,
    LinkNoDecoration,
    NewsTileWrapper,
    ImageSection,
    TextSection,
    Description,
    ReadMore
};
