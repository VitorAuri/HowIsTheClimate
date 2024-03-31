import bg from '../../assets/bg.svg'
import { BackgroundPosition } from './styles'
export const Background = () => {
    return (
        <BackgroundPosition>
            <img src={bg} alt="" />
        </BackgroundPosition>
    )
}