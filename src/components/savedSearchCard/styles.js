import styled from "styled-components";
import { Button } from "carbon-components-react";
import { SmallHeading } from "../../styles/styles.js";
import { SaveSearchButton } from "../../styles/carbonComponents.js";

export const SavedSearchButton = styled(Button)`
    display: inline-block;
    width: 100%;

    :first-child {
        margin-bottom: 0.25rem;
    }
`;

export const DeleteSearchButton = styled(SaveSearchButton)`
    display: inline-block;
    width: 100%;
    margin-bottom: 0.25rem;
`;

export const ContentDiv = styled.div`
    display: inline-block;
    width: 100%;
    max-width: calc(100% - 11.125rem);
    height: 100%;
    vertical-align: top;
`;

export const ButtonDiv = styled.div`
    display: inline-block;
    width: 11.125rem;
    vertical-align: bottom;
`;

export const SavedSearchTitle = styled(SmallHeading)`
    margin: 1rem 0 0.5rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CardLoadingBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: ${p => p.theme.colors.white};
    z-index: 1;
`;

export const InlineButtonText = styled.div`
    display: inline-block;
    line-height: 2rem;
`;
