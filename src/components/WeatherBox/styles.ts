import styled from "styled-components";

export const GridCentralizer = styled.div`
display: grid;
place-content: center;
text-align: center;
margin-top: 70px;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border-radius: 8px;
height: 300px;
width: 300px;
box-shadow: 0px 0px 10px black;
transition: 0.5s;
`
export const TemperatureButton = styled.button`
width: 180px;
height: 30px;
margin: 20px 0px;
border: none;
border-radius: 8px;
font-size: large;
font-weight: bold;
background: green;
color: white;
cursor: pointer;
box-shadow: 0px 0px 5px black;
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