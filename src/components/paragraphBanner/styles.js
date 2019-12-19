import styled from "styled-components";

export const Banner = styled.div`
    width: 100%;
    min-height: 18.8125rem;
    padding: 2.625rem 2rem 0 2rem;
    background-color: ${p => p.theme.colors.primaryLight};
    overflow: hidden;
`;

export const BannerItem = styled.div`
    display: inline-block;
    height: 100%;
    vertical-align: top;
    padding-bottom: 2rem;
`;
