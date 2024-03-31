import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
    transition: 0.2s;
    &:hover{
        text-shadow: 0px 0px 5px white;
    }
}
`