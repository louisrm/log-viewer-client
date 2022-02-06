import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #F3F3F3;
        --medGray: #E5E5E5;
        --darkGray: #9B9B9B;
        --green: #38AE00;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'IBM Plex Mono', monospace;
        background-color: var(--lightGray);
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--green);

        h1 {
            font-size: 5rem;
            font-weight: 700;
            color: var(--green);
        }

        h3 {
            color: black;
            font-size: var(--fontMed);
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: black;
        }

        li {
            font-size: 1rem;
            color: black;
        }
    }
`;