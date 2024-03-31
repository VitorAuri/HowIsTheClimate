import styled from "styled-components";

export const GridCentralizer = styled.div`
display: grid;
place-content: center;
text-align: center;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border-radius: 8px;
margin-top: -100px;
`
export const TemperatureButton = styled.button`
position: absolute;
width: 180px;
height: 30px;
border: 1px solid gray;
border-radius: 8px;
font-size: large;
background: transparent;
color: white;
cursor: pointer;

top: 65%;
left: 50%;
transform: translate(-50%, -50%);

transition: 0.2s;
&:hover{
    box-shadow: 0px 0px 5px white;
}
`
export const DisplayFlex = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    margin: 0px 5px;
}
div{
    margin: 0px 5px;
}
`