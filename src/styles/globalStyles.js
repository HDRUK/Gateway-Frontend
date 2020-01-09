import { createGlobalStyle } from "styled-components";
import "../carbon-components.css";
import museoFont100 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded100.otf";
import museoFont300 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded300.otf";
import museoFont500 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded500.otf";
import museoFont700 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded700.otf";
import museoFont900 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded900.otf";
import museoFont1000 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded1000.otf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 100;
        src: url(${museoFont100}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 300;
        src: url(${museoFont300}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 500;
        src: url(${museoFont500}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 700;
        src: url(${museoFont700}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 900;
        src: url(${museoFont900}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded';
        font-style: normal;
        font-weight: 1000;
        src: url(${museoFont1000}) format('truetype');
    }
    body {
        padding: 0;
        margin: 0;
        background-color: ${p => p.theme.colors.white};
        font-family: "Museo Sans Rounded";
        font-weight: 300;
        letter-spacing: 0.011875rem !important;
    }
  
`;

export default GlobalStyles;
