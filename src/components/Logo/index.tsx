import cloud from '/blackcloud.png';
import { Container } from "./styles"

export const Logo = () => {
    return (
        <Container>
            <img src={cloud} alt="" />
            <h1>How's the Weather?</h1>
        </Container>
    )
}