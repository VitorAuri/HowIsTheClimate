import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-repeat: no-repeat;
    height: 90vh;
    background: linear-gradient(#e8e8e8,#9e9e9e);
}
`