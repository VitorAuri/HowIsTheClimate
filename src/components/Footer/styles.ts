import styled from "styled-components";

export const CentralizerContainer = styled.div`
margin-top: 10px;
display: grid;
place-content: center;
`
export const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;
text-align: center;
width: 280px;
padding: 10px 0px;
border-radius: 8px;
box-shadow: 0px 0px 10px black;
height: auto;
background: linear-gradient(#1a1a1a,#0a0a0a);
h1{
    color: white;
}
li{
    color: white;
    display: flex;
    align-items: center;
}
`