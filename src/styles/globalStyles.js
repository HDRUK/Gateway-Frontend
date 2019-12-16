import { createGlobalStyle } from "styled-components";
import "../carbon-components.css";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${p => p.theme.colors.white};
        font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyles;
