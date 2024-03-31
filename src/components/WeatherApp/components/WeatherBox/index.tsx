import { useState } from "react";
import { Container, DisplayFlex, GridCentralizer, TemperatureButton } from "./styles";
import { SunHorizon, Wind } from "phosphor-react";
import { TemperatureMeasurements } from "./components/TemperatureMeasurements";

interface TypeOf {
    nameOfCity: string;
    country: string;
    temperature: string;
    flag: string;
    hide: boolean;
    clouds: string;
    wind: string;
}
export const WeatherBox = ({ nameOfCity, country, flag, temperature, hide, clouds, wind }: TypeOf) => {
    const [tempType, setTempType] = useState(true)
    const changeTempType = () => {
        if (tempType) { setTempType(false) }
        else { setTempType(true) }
    }
    return (
        <GridCentralizer>
            <Container>
                <div hidden={hide}>
                    <h1>{nameOfCity}</h1>
                    <DisplayFlex>
                        <img src={flag} alt="" />
                        <p><i>{country}</i></p>
                    </DisplayFlex>
                </div>
                <div hidden={!hide}>
                    <h1>Enter the name of a City first!</h1>
                    <SunHorizon size={40} />
                </div>
                <div hidden={hide}>
                    <TemperatureMeasurements tempType={temperature} temperature={temperature} />
                    <DisplayFlex>
                        <h2>{wind}m/s</h2>
                        <div>
                            <Wind size={25} />
                        </div>
                    </DisplayFlex>
                    <h2>{clouds}</h2>
                </div>
                <div hidden={hide}>
                    <TemperatureButton onClick={changeTempType} hidden={!tempType}>See in Fahrenheit</TemperatureButton>
                    <TemperatureButton onClick={changeTempType} hidden={tempType}>See in Celsius</TemperatureButton>
                </div>
            </Container>
        </GridCentralizer>
    )
}