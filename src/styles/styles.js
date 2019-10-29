import { Button, UnorderedList, SideNav, SideNavLinkText } from "carbon-components-react";
import styled from "styled-components";
import "../carbon-components.css";

const DarkText = styled.text`
    color: #3c3c3b;
`;

const ParagraphText = styled.p`
    font-size: 1.5rem;
    font-weight: 100;
`;

const ParagraphBullets = styled(UnorderedList)`
    padding-top: 5px;
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

const StyledButton = styled(Button)`
    padding: 15px;
    width: 215px;
`;

const SideNavText = styled(SideNavLinkText)`
    font-size: 1.2rem !important;
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

export {
    Heading,
    ParagraphHeading,
    ParagraphText,
    DarkText,
    StyledButton,
    CenterBlock,
    SmallSpace,
    MediumSpace,
    LargeSpace,
    ParagraphBullets,
    NewListItem,
    LinkText,
    SideStripe,
    SideNavText,
    NavHeading,
    NavText,
    MenuLine
};
