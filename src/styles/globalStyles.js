import { createGlobalStyle } from "styled-components";
import museoFont100 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded100.otf";
import museoFont300 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded300.otf";
import museoFont500 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded500.otf";
import museoFont700 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded700.otf";
import museoFont900 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded900.otf";
import museoFont1000 from "./fonts/museo-sans-rounded-cufonfonts/MuseoSansRounded1000.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Museo Sans Rounded 100';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont100}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded 300';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont300}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded 500';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont500}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded 700';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont700}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded 900';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont900}) format('truetype');
    }
    @font-face {
        font-family: 'Museo Sans Rounded 1000';
        font-style: normal;
        font-weight: normal;
        src: url(${museoFont1000}) format('truetype');
    }
    body {
        padding: 0;
        margin: 0;
        background-color: #3c3c3b;
        font-family: "Museo Sans Rounded 300";
        letter-spacing: 0.67px !important;
        
    }
  
`;

export default GlobalStyle;
