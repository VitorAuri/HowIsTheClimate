import { AnimationContainer, FifthCloud, FirstCloud, FourthCloud, SecondCloud, ThirdCloud } from "./styles"
import cloud_one from '../../assets/cloud1.png'
import cloud_two from '../../assets/cloud2.png'


export const CloudAnimation = () => {
    return (
        <AnimationContainer>
            <FirstCloud><img src={cloud_one} alt="" /></FirstCloud>
            <SecondCloud><img src={cloud_two} alt="" /></SecondCloud>
            <ThirdCloud><img src={cloud_one} alt="" /></ThirdCloud>
            <FourthCloud><img src={cloud_two} alt="" /></FourthCloud>
            <FifthCloud><img src={cloud_one} alt="" /></FifthCloud>
        </AnimationContainer>
    )
}