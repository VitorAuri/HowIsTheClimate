import { useState } from "react";
import { Container, DisplayFlex, GridCentralizer, TemperatureButton } from "./styles";
import { Sun } from "phosphor-react";

interface TypeOf {
    nameOfCity: string;
    country: string;
    temperature: string;
    flag: string;
    backgroundColor: string;
}
export const WeatherBox = ({ nameOfCity, country, flag, temperature, backgroundColor }: TypeOf) => {
    const [tempType, setTempType] = useState(true)
    const changeTempType = () => {
        if (tempType) { setTempType(false) }
        else { setTempType(true) }
    }
    return (
        <GridCentralizer>
            <Container style={{ background: backgroundColor }}>
                <div>
                    <h1>{nameOfCity}</h1>
                    <DisplayFlex>
                        <img src={flag} alt="" />
                        <p><i>{country}</i></p>
                    </DisplayFlex>
                </div>

                <h2 hidden={!tempType}>{Math.floor(Number(temperature) - 273.15)}°C</h2>
                <h2 hidden={tempType}>{Math.floor(Number(temperature) - 273.15) * 9 / 5 + 32}°F</h2>
                <Sun size={40} style={{ color: "yellow", display: "none" }} />
                <TemperatureButton onClick={changeTempType} hidden={!tempType}>See in Fahrenheit</TemperatureButton>
                <TemperatureButton onClick={changeTempType} hidden={tempType}>See in Celsius</TemperatureButton>
            </Container>
        </GridCentralizer>
    )
}