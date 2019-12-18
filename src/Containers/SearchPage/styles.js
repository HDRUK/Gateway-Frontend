import styled from "styled-components";
import { ParagraphHeading, ResultsWrapper } from "../../styles/styles.js";

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
`;

export const Results = styled.div`
    opacity: ${p => (p.invisible ? 0 : 1)};
    transition: 0.8s;
    transition-delay: 0.5s;
    pointer-events: ${p => (p.invisible ? "none" : "unset")};
`;

export const SearchResultsWrapper = styled(ResultsWrapper)``;
