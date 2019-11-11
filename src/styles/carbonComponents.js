import {
    Button,
    UnorderedList,
    Header,
    SideNavLinkText,
    Search,
    SideNav,
    Dropdown,
    Accordion,
    AccordionItem,
    SideNavItems,
    Checkbox,
    DatePicker,
    DatePickerInput
} from "carbon-components-react";
import styled, { css } from "styled-components";
import "../carbon-components.css";

export const StyledButton = styled(Button)`
    padding: 15px;
    width: 215px;
    height: 54px;
`;

export const ParagraphBullets = styled(UnorderedList)`
    padding-top: 5px;
`;

export const AccordionBlock = styled(Accordion)`
    background-color: #d8d8d8;
    width: 90%;
    align-self: center;
    margin: 1rem 0;
`;

export const AccordionElement = styled(AccordionItem)`
    position: relative;
    border-color: #8d8d8d;
    ${props =>
        props.modal &&
        props.open &&
        css`
            > div {
                padding: 0 !important;
            }
            * svg {
                transform: rotate(0deg) !important;
            }
        `}
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

export const NavItems = styled(SideNavItems)`
    flex: inherit;
    overflow: visible !important;
`;

export const CheckboxItem = styled(Checkbox)``;

export const SearchBar = styled(Search)``;

export const DropdownFilter = styled(Dropdown)``;

export const DateSelector = styled(DatePicker)`
    flex-direction: column;
`;

export const DateInput = styled(DatePickerInput)``;

export const MainSideNav = styled(SideNav)`
    display: inline-flex;
    position: absolute;
    background-color: #b5bab8;
    font-size: 1.2rem;
    overflow: auto;
`;
