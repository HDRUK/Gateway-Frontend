import styled from "styled-components";
import { Logo } from "../../styles/styles.js";

export const FooterWrapper = styled.div`
    height: 12rem;
    padding-bottom: 1rem;
    background-color: rgb(60, 60, 59);
    color: white;
    padding-left: 7rem;
    font-size: 1.1rem;
    position: relative;
`;

export const FooterBlock = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    height: 90%;
    vertical-align: top;
    padding: 3rem 5rem 0 0;
`;

export const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

export const FooterImage = styled(Logo)`
    max-width: 8rem;
    max-height: 5rem;
`;
