import styled from "styled-components";

export const CentralizerContainer = styled.div`
display: grid;
place-content: center;
margin-top: 70px;
`
export const AppStylingContainer = styled.main`
color: white;

display: grid;
place-content: center;
align-items: center;
position: relative;
background: linear-gradient(#1a1a1a,#0a0a0a);
width: 80vw;
height: 400px;
border-radius: 8px;
box-shadow: 0px 0px 10px black;
`
export const FormContainer = styled.form`
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
@media (max-width:484px) {
flex-direction: column;
input{
    margin: 10px 0px;
}
}
input{
    color: gray;
    height: 30px;
    width: 50vw;
    text-align: center;
    border-radius: 8px;
    border: 1px solid gray;
    background: #0a0a0a;
    &:focus{
        box-shadow: 0px 0px 5px white;
    }
}
button{
    color: gray;
    margin: 0px 10px;
    width: 120px;
    height: 30px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid gray;
    transition: 0.2s;
    cursor: pointer;
    background: #0a0a0a;
    &:hover{
        box-shadow: 0px 0px 5px white;
    }
}
`