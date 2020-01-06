import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "carbon-components-react";

export const SideNavLinkItem = styled(NavLink)`
    position: relative;
    width: 100%;
    display: block;

    &.active {
        font-weight: 700;
        :before {
            left: -1rem;
            top: 50%;
            border: solid transparent;
            content: "";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-left-color: ${p => p.theme.colors.primary};
            border-width: 0.4rem;
            border-left-width: 0.6928rem;
            margin-top: -0.4rem;
        }
    }
`;

export const SideNavLink = styled(Button)`
    width: 100%;
    height: 100%;
    color: ${p => p.theme.text.primary};
    line-height: 1.125rem;
    font-weight: inherit;
    padding: 0;

    :hover {
        color: ${p => p.theme.text.primary};
    }
`;

export const SideNavLinksList = styled.ul`
    margin: 1.75rem 1.5rem 0 1.5rem;

    :first-child {
        border-top: 0.0675rem solid ${p => p.theme.colors.border};
    }

    li {
        border-bottom: 0.0675rem solid ${p => p.theme.colors.border};
    }
`;
