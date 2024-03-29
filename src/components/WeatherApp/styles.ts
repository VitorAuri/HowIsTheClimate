import styled from "styled-components";

export const FormContainer = styled.form`
display: grid;
place-content: center;
text-align: center;
align-items: center;
margin-top: 20px;
input{
    height: 30px;
    width: 270px;
    text-align: center;
    margin: 20px 100px;
    border-radius: 8px;
    border: 1px solid gray;
}
button{
    margin: 0px 165px;
    width: 140px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid gray; 
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 10px green;
    }
}
h1{
    font-size: 1.5rem;
}
`