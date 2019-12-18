import styled from "styled-components";
import { WidthWrapper, Logo } from "../../styles/styles.js";

export const FooterWrapper = styled.div`
    height: ${p => p.theme.sizes.footer}rem;
    background: linear-gradient(135deg, ${p => p.theme.colors.primary}, ${p => p.theme.colors.secondary});
    color: white;
    padding-top: 4rem;
    padding-bottom: 1rem;
    font-size: 1.1rem;
    position: relative;
`;

export const FooterContent = styled(WidthWrapper)`
    display: block;
    margin: 0 auto 0;
    max-width: 62rem;
    padding: 0 2rem;
`;

export const FooterBlock = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    height: 100%;
    vertical-align: top;
    padding: 0 4rem 0 0;
    line-height: 1.1875rem;

    :last-of-type {
        padding-right: 0;
        padding-left: 4rem;
    }
`;

export const FooterText = styled.div`
    width: 100%;
    margin: 0 0 0.4rem 0;
`;

export const FooterImage = styled(Logo)`
    max-width: 8rem;
    max-height: 5rem;
`;
