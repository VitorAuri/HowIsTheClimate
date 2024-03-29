import { useState } from "react";
import { Container, DisplayFlex, GridCentralizer, TemperatureButton } from "./styles";
import { Sun, SunHorizon } from "phosphor-react";

interface TypeOf {
    nameOfCity: string;
    country: string;
    temperature: string;
    flag: string;
    backgroundColor: string;
    hide: boolean;
}
export const WeatherBox = ({ nameOfCity, country, flag, temperature, backgroundColor, hide }: TypeOf) => {
    const [tempType, setTempType] = useState(true)
    const changeTempType = () => {
        if (tempType) { setTempType(false) }
        else { setTempType(true) }
    }
    return (
        <GridCentralizer>
            <Container style={{ background: backgroundColor }}>
                <div hidden={hide}>
                    <h1>{nameOfCity}</h1>
                    <DisplayFlex>
                        <img src={flag} alt="" />
                        <p><i>{country}</i></p>
                    </DisplayFlex>
                </div>
                <div hidden={!hide}>
                    <h1 style={{color: "white", fontSize: "1.2rem", marginTop: "25px"}}>Enter the name of a City first!</h1>
                    <SunHorizon style={{color: "white", marginTop: "10px"}} size={40}/>
                </div>
                <div hidden={hide}>
                    <DisplayFlex>
                        <h2 hidden={!tempType}>{Math.floor(Number(temperature) - 273.15)}°C</h2>
                        <div hidden={!tempType}>
                            <Sun size={30} />
                        </div>
                    </DisplayFlex>
                    <DisplayFlex>
                        <h2 hidden={tempType}>{Math.floor(Number(temperature) - 273.15) * 9 / 5 + 32}°F</h2>
                        <div hidden={tempType}>
                            <Sun size={30} />
                        </div>
                    </DisplayFlex>
                </div>
                <div hidden={hide}>
                    <TemperatureButton onClick={changeTempType} hidden={!tempType}>See in Fahrenheit</TemperatureButton>
                    <TemperatureButton onClick={changeTempType} hidden={tempType}>See in Celsius</TemperatureButton>
                </div>
            </Container>
        </GridCentralizer>
    )
}