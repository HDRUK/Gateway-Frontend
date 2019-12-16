import styled from "styled-components";
import { ResultsWrapper } from "../../styles/styles.js";

export const SavedSearchesWrapper = styled(ResultsWrapper)`
    ${p => p.visible && "height: calc(100vh - 8rem);"};
    ${p => p.visible && "max-height: calc(100vh - 8rem);"};
`;
