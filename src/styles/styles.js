import { Button } from "carbon-components-react";
import styled from "styled-components";
import "../carbon-components.css";

const DarkText = styled.text`
    color: #3c3c3b;
`;

const ParagraphText = styled.p`
    font-size: 1.5rem;
    font-weight: 100;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 100;
`;

const ParagraphHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`;

const CenterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SmallSpace = styled.div`
    padding: 15px;
`;

const MediumSpace = styled.div`
    padding: 30px;
`;

const LargeSpace = styled.div`
    padding: 80px;
`;

const StyledButton = styled(Button)`
    padding: 15px;
    width: 215px;
`;

export {
    Heading,
    ParagraphHeading,
    ParagraphText,
    DarkText,
    StyledButton,
    CenterBlock,
    SmallSpace,
    MediumSpace,
    LargeSpace
};
