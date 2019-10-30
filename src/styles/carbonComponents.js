import { Button, UnorderedList, Header, SideNavLinkText, Search } from "carbon-components-react";
import styled from "styled-components";
import "../carbon-components.css";

export const StyledButton = styled(Button)`
    padding: 15px;
    width: 215px;
`;

export const ParagraphBullets = styled(UnorderedList)`
    padding-top: 5px;
`;

export const HeaderWrapper = styled(Header)`
    background-color: #3c3c3b;
    color: white;
    height: 4rem;
    max-width: 100%;
    position: unset;
`;

export const SideNavText = styled(SideNavLinkText)`
    font-size: 1.2rem !important;
`;

export const SearchBar = styled(Search)``;
