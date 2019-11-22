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

export const SavedSearchTable = styled.table`
    margin-bottom: 0.75rem;
    th,
    td {
        padding: 0 0.5rem 0.125rem 0;
        text-align: left;
    }

    th {
        font-size: 0.625rem;
        line-height: 0.75rem;
        color: #979797;
    }

    td {
        font-size: 0.875rem;
        line-height: 1.0625rem;
        color: #0f62fe;
    }
`;

export const SavedSearchTitle = styled(SmallHeading)`
    margin: 1rem 0 0.5rem 0;
`;
