import { Button } from "carbon-components-react";
import styled from "styled-components";

const Font = styled.text`
    font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
`;

const DarkText = styled.text`
    color: #454544;
`;

const ParagraphText = styled.p`
    font-size: 1.5rem;
    font-weight: 100;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
`;

const ParagraphHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`;

const StyledButton = styled(Button)`
    height: 20px;
    color: #ffffff;
    background-color: #0f62fe;
    font-size: 0.875rem;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    weight: 400;
`;

// const BulletPoints = styled
export { Font, Heading, ParagraphHeading, ParagraphText, DarkText, StyledButton };
