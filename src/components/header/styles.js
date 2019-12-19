import styled from "styled-components";
import { LinkNoDecoration } from "../../styles/styles.js";

export const HeaderAlignment = styled.div`
    width: 100%;
`;

export const HeaderAlignmentItem = styled.div`
    height: 100%;
    float: ${p => (p.right ? "right" : "left")};
`;

export const HeaderSpacer = styled.div`
    height: 100%;
    width: 6rem;
`;

export const HeaderLink = styled.a`
    :hover {
        text-decoration: underline;
        text-decoration-color: ${p => p.theme.colors.white};
    }
`;
