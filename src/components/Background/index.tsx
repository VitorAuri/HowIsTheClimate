import clouds from '../../assets/clouds2.svg'
import { BackgroundPosition } from './styles'
export const Background = () => {
    return (
        <BackgroundPosition>
            <img src={clouds} alt="" />
        </BackgroundPosition>
    )
}