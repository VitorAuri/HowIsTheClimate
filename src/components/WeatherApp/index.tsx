import { SetStateAction, useState } from "react";
import { WeatherBox } from "../WeatherBox";
import { FormContainer } from "./styles";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [countryFlag,setCountryFlag] = useState(`https://flagsapi.com/:country_code/flat/16.png`)

  const APIkey: string = "59827be1e420eb390d3eb0bc73820d08";
  const [cityNameData, setCityNameData] = useState("Enter name of a City!");
  const [country, setCountry] = useState("");
  const [cityTemp, setCityTemp] = useState(0);

  async function getCity(city: string) {
    try{
      const apiURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
      
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      setCityNameData(data.name);
      setCountry(data.sys.country);
      setCountryFlag(`https://flagsapi.com/${data.sys.country}/shiny/32.png`);
      setCityTemp(data.main.temp);
    }
    catch(err){
      setCityNameData("Invalid or Incorrect City Name")
      console.log(err)
    }
  }
  function CheckInput(event: { target: { value: SetStateAction<string>; }; }) {
    setCity(event?.target.value);
  }
  function HandleSubmit() {
    event?.preventDefault();
    getCity(city);
  }

  const bgColor = cityTemp >= 25 ? "orange" : "blue";
  return (
    <>
      <WeatherBox
        nameOfCity={cityNameData}
        country={country} 
        flag={countryFlag}
        temperature={cityTemp.toString()}
        backgroundColor={bgColor}
        />
      <FormContainer onSubmit={HandleSubmit}>
        <h1>Type the name of the City below</h1>
        <input type="text" onChange={CheckInput} />
        <button>Get Current Climate</button>
      </FormContainer>
    </>
  )
}