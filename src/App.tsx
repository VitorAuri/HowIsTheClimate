import { Logo } from "./components/Logo"
import { WeatherApp } from "./components/WeatherApp"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <WeatherApp />
    </>
  )
}