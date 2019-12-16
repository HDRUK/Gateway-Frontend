import styled from "styled-components";
import { ResultsWrapper } from "../../styles/styles.js";

export const SavedSearchesWrapper = styled(ResultsWrapper)`
    height: ${p => (p.visible ? "calc(100vh - 8rem)" : "calc(100vh - 21rem)")};
    ${p => p.visible && "max-height: calc(100vh - 8rem);"};
`;
