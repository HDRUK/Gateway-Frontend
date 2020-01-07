import styled from "styled-components";
import { AccordionBlock } from "../../../styles/carbonComponents";

export const ExpandingAccordionBlock = styled(AccordionBlock).attrs(p => ({
    style: {
        paddingBottom: p.expandheight ? `${p.expandheight}px` : "1rem"
    }
}))`
    display: inline-block;
    padding-bottom: "1rem";
`;
