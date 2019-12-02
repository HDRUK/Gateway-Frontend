import styled from "styled-components";
import { Button } from "carbon-components-react";
import { SmallHeading } from "../../styles/styles.js";

export const SavedSearchButton = styled(Button)`
    display: inline-block;
    width: 100%;

    :first-child {
        margin-bottom: 0.25rem;
    }
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
`;
