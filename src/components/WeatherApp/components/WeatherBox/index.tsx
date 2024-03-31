import { useState } from "react";
import { Container, DisplayFlex, FirstView, FlexFlag, GridCentralizer, TemperatureButton } from "./styles";
import { Drop, SunHorizon, Wind } from "phosphor-react";
import { TemperatureMeasurements } from "./components/TemperatureMeasurements";

interface TypeOf {
    nameOfCity: string;
    country: string;
    temperature: string;
    flag: string;
    hide: boolean;
    clouds: string;
    wind: string;
    humidity: string;
}
export const WeatherBox = ({ nameOfCity, country, flag, temperature, hide, clouds, wind, humidity }: TypeOf) => {
    const [tempType, setTempType] = useState(true)
    const changeTempType = () => {
        if (tempType) { setTempType(false) }
        else { setTempType(true) }
    }
    return (
        <GridCentralizer>
            <Container>
                <div hidden={hide}>
                    <FlexFlag>
                        <h1>{nameOfCity}</h1>
                        <div>
                            <img src={flag} alt="" />
                            <p><i>{country}</i></p>
                        </div>
                    </FlexFlag>
                </div>
                <FirstView hidden={!hide}>
                    <SunHorizon size={40} />
                    <h1>Enter the name of a City first!</h1>
                </FirstView>
                <div hidden={hide}>
                    <TemperatureMeasurements tempType={temperature} temperature={temperature} />
                    <DisplayFlex>
                        <h2>{wind} m/s</h2>
                        <div>
                            <Wind size={25} />
                        </div>
                    </DisplayFlex>
                    <DisplayFlex>
                        <h2>{humidity}%</h2>
                        <div>
                            <Drop size={25} />
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