import styled from "styled-components";
import { ParagraphHeading } from "../../styles/styles.js";

export const SearchHeading = styled(ParagraphHeading)`
    height: 0;
    text-align: center;
    transform: translateY(12rem);
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 0.25s;
`;

export const SearchBarWrapper = styled.div`
    max-width: 32rem;
    padding: 0 1rem;
    margin: 0 auto 0;
    text-align: center;
    transform: translateY(${p => (p.main ? "16rem" : "0")});
    transition: 0.7s;
    z-index: 1;
`;

export const Results = styled.div`
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 0.8s;
    transition-delay: 0.5s;
    pointer-events: ${p => (p.invisible ? "none" : "unset")};
`;

export const ResultsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 32rem;
    max-height: calc(100vh - 25rem);
    overflow: scroll;
    padding: 0.25rem 1rem 0 1rem;
`;

export const ResultsCounter = styled.div`
    display: inline-block;
    line-height: 2.5rem;
`;

export const SortDiv = styled.div`
    display: inline-block;
    float: right;
`;

export const SearchInfo = styled.div`
    padding: 0 1rem 0.5rem 1rem;
`;
