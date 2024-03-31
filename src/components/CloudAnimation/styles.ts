import styled, {keyframes} from "styled-components";

const animationTiming = "linear";
const cloudAnimation = keyframes`
  0% {
    left: -60%;
  }
  100% {
    left: 100%;
  }
`;
export const AnimationContainer = styled.div`
top: 0;
position: absolute;
z-index: -1;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
@media (max-width: 768px) {
    display: none; 
}
`
export const FirstCloud = styled.div`
position: absolute;
z-index: 0;
top: 150px;
left: -100%;
animation-name: ${cloudAnimation};
animation-timing-function: ${animationTiming};
animation-duration: 20s;
animation-iteration-count: infinite;
`
export const SecondCloud = styled.div`
position: absolute;
z-index: 0;
bottom: 0;
left: -100%;
animation-name: ${cloudAnimation};
animation-timing-function: ${animationTiming};
animation-duration: 19s;
animation-iteration-count: infinite;
animation-delay: 10s;
`
export const ThirdCloud = styled.div`
position: absolute;
z-index: 0;
top: 0;
left: -100%;
animation-name: ${cloudAnimation};
animation-timing-function: ${animationTiming};
animation-duration: 17s;
animation-iteration-count: infinite;
animation-delay: 8s;
`
export const FourthCloud = styled.div`
position: absolute;
z-index: 0;
top: 300px;
left: -100%;
animation-name: ${cloudAnimation};
animation-timing-function: ${animationTiming};
animation-duration: 22s;
animation-iteration-count: infinite;
`
export const FifthCloud = styled.div`
position: absolute;
z-index: 0;
top: 50px;
left: -100%;
animation-name: ${cloudAnimation};
animation-timing-function: ${animationTiming};
animation-duration: 19s;
animation-iteration-count: infinite;
animation-delay: 6s;
`

