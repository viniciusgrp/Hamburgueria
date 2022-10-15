import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-2: #93D7AF;
        --color-secundary: #EB5757;

        --color-grey-1: #333333;
        --color-grey-2: #828282;
        --color-grey-3: #E0E0E0;
        --color-white: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;
    }

    body {
        font-family: 'Inter', sans-serif;
    }
`;


export default GlobalStyle