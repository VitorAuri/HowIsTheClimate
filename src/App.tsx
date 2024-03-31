import { Background } from "./components/Background"
import { CloudAnimation } from "./components/CloudAnimation"
import { Footer } from "./components/Footer"
import { Logo } from "./components/Logo"
import { WeatherApp } from "./components/WeatherApp"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <>
      <CloudAnimation />
      <Background />
      <GlobalStyle />
      <Logo />
      <WeatherApp />
      <Footer />
    </>
  )
}