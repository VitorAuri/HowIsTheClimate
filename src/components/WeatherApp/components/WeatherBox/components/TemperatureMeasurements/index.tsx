import { DisplayFlex } from "./styles"
import { Thermometer } from "phosphor-react"

interface typeOf {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tempType: any;
    temperature: string;
}

export const TemperatureMeasurements = ({tempType, temperature}: typeOf) => {
    return (
        <DisplayFlex>
            <DisplayFlex>
                <h2 hidden={!tempType}>{Math.floor(Number(temperature) - 273.15)}°C</h2>
                <div hidden={!tempType}>
                    <Thermometer size={25} />
                </div>
            </DisplayFlex>
            <DisplayFlex>
                <h2 hidden={tempType}>{Math.floor(Number(temperature) - 273.15) * 9 / 5 + 32}°F</h2>
                <div hidden={tempType}>
                    <Thermometer size={25} />
                </div>
            </DisplayFlex>
        </DisplayFlex>
    )
}