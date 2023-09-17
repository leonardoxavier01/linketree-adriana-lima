import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;        
    }

    body {     
        height: 100%;
        background: linear-gradient(360deg, #946042 11.6%, #ac8b78 100%) no-repeat;
        color: #fff;
        background-size: cover;
    }

    @media (min-width: 1440px) {
        body {     
            height: 100vh;
        }
      } 

    a {
        text-decoration: none;
        color: inherit;
    }
`;
