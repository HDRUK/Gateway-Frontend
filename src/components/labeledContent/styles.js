import styled from "styled-components";

export const LabeledContentWrapper = styled.div`
    display: inline-block;

    h2,
    p {
        padding-top: 0.125rem;
        padding-right: 0.5rem;
    }
`;

export const HeaderLabel = styled.h2`
    font-size: 0.625rem;
    line-height: 0.75rem;
    color: ${p => p.theme.colors.lightText};
    text-transform: uppercase;
`;

export const ContentText = styled.p`
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${p => p.theme.colors.blueText};

    ${p => !p.lowercase && "text-transform: uppercase"}
`;
