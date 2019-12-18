import styled from "styled-components";
import { HeaderNavigation } from "carbon-components-react";

export const NavigationWrapper = styled.div`
    width: 100%;
    height: ${p => p.theme.sizes.navigation}rem;
    border-bottom: 0.0625rem solid ${p => p.theme.colors.border};
`;

export const NavigationHeader = styled(HeaderNavigation)`
    :before {
        content: unset;
    }

    @media (max-width: 66rem) {
        display: block;
    }
`;

export const NavigationItem = styled.div`
    height: 100%;
    min-height: 2.875rem;
    padding: 1rem;
    line-height: 0.875rem;
    text-decoration: none;
    color: ${p => p.theme.text.primary};

    ${p => p.active && `border-bottom: 0.25rem solid ${p.theme.colors.primarySolid}`};
    font-weight: ${p => p.active && p.theme.text.bold};

    :hover,
    :active {
        border-bottom: 0.25rem solid ${p => p.theme.colors.primarySolid};
        font-weight: ${p => p.theme.text.bold};
    }
`;
