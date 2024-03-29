import cloud from '/cloud.png';
import { Container } from "./styles"

export const Logo = () => {
    return (
        <Container>
            <img src={cloud} alt="" />
            <h1>How's the Climate?</h1>
        </Container>
    )
}