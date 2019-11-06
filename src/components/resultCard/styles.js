import styled from "styled-components";

export const TitleBox = styled.div`
    display: inline-block;
    width: calc(100% - 1rem);
`;

export const Arrow = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border: 0.125rem solid #000000;
    border-width: 0.06125rem 0.06125rem 0 0;
    transform: rotate(45deg);
`;
