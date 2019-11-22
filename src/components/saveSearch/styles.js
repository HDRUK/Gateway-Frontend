import styled from "styled-components";

import { Button, InlineLoading } from "carbon-components-react";

export const SaveSearchButton = styled(Button)`
    width: 90%;
    margin: 0.5rem auto 0;
    padding: 0 1rem 0 1rem;
    background-color: unset;
    border: 0.0625rem solid #0f62fe;
    color: #0f62fe;

    :disabled {
        background-color: #002d9c;
        border-color: #002d9c;
        color: #ffffff;

        :hover {
            background-color: #002d9c;
            border-color: #002d9c;
            color: #ffffff;
            outline-color: #002d9c;
        }
    }

    :hover {
        background-color: #0f62fe;
    }
`;

export const RightSmallInlineLoading = styled(InlineLoading)`
    width: unset;
    float: right;
`;
