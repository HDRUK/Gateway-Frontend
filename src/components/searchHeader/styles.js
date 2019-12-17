import styled from "styled-components";

export const SearchHeaderImage = styled.img`
    width: 10.875rem;
    max-height: 100%;
    vertical-align: middle;
    padding: 0.5rem 0;
`;

export const SearchHeaderWrapper = styled.div`
    height: ${p => p.theme.sizes.searchHeader}rem;
    max-height: ${p => p.theme.sizes.searchHeader}rem;
    overflow: hidden;
    padding: 0 2rem;
    border-bottom: 0.0625rem solid ${p => p.theme.colors.border};
`;

export const SearchBarWrapper = styled.div`
    vertical-align: middle;
    width: 100%;
    max-width: 32rem;
    padding: 0 1rem 0 1rem;
    margin: 1rem auto 0;
    text-align: center;
    transform: translateY(${p => (p.main ? "16rem" : "0")});
    transition: 0.7s;
`;
