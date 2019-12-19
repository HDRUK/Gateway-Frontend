import styled from "styled-components";

export const LandingPageWrapper = styled.div`
    padding: 0 3rem 1rem 3rem;
    text-align: center;
`;

export const ParagraphIcon = styled.div`
    vertical-align: top;
    display: inline-block;
    padding-right: 1.625rem;
    padding-top: 0.25rem;
    fill: ${p => p.theme.colors.primary};
`;

export const PartnerImage = styled.div`
    margin: 0 2rem 1rem 2rem;
    width: 5rem;
    max-width: 5rem;
    vertical-align: middle;
`;
