import { GithubLogo, LinkedinLogo, Person } from "phosphor-react"
import { CentralizerContainer, FooterContainer } from "./styles"

export const Footer = () => {
    return (
        <CentralizerContainer>
            <FooterContainer>
                <h1>Contact Info</h1>
                <ul>
                    <li><GithubLogo size={25}/><a href="https://github.com/VitorAuri/HowIsTheWeather" target="_blank">GitHub</a></li>
                    <li><LinkedinLogo size={25}/><a href="https://www.linkedin.com/in/vitor-auril%C3%A2ndio-54678926a/" target="_blank">LinkedIn</a></li>
                    <li><Person size={25}/><a href="https://vitor-dev.vercel.app/" target="_blank">Portfolio</a></li>
                </ul>
            </FooterContainer>
        </CentralizerContainer>
    )
}
