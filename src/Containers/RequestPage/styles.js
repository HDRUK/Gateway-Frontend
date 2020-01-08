import styled from "styled-components";
import { NewStyledButton, RightSmallInlineLoading } from "../../styles/carbonComponents";

export const LoadingButton = styled(NewStyledButton)`
    width: 11rem;
    display: flex;
    justify-content: center;
`;

export const LoadingWheel = styled(RightSmallInlineLoading)`
    margin-top: -0.4rem;
`;
