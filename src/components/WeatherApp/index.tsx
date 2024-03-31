import { SetStateAction, useState } from "react";
import { WeatherBox } from "./components/WeatherBox";
import { AppStylingContainer, CentralizerContainer, FormContainer } from "./styles";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [countryFlag, setCountryFlag] = useState(`https://flagsapi.com/:country_code/shiny/32.png`);
  const [hide, setHide] = useState(true);

  const APIkey: string = "59827be1e420eb390d3eb0bc73820d08";
  const [cityNameData, setCityNameData] = useState("");
  const [country, setCountry] = useState("");
  const [cityTemp, setCityTemp] = useState(0);
  const [clouds,setClouds] = useState("");
  const [wind,setWind] = useState("");
  const [humidity,setHumidity] = useState("");

  async function getCity(city: string) {
    try {
      const apiURL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      setCityNameData(data.name);
      setCountry(data.sys.country);
      setCountryFlag(`https://flagsapi.com/${data.sys.country}/shiny/32.png`);
      setCityTemp(data.main.temp);
      setClouds(
        data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
      );
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setHide(false);
    }
    catch (err) {
      setCityNameData("Invalid or Incorrect City Name");
      setCityTemp(274); // Makes the temperature go to 0 if error happens.
      console.log(err);
    }
  }
  function CheckInput(event: { target: { value: SetStateAction<string>; }; }) {
    setCity(event?.target.value);
  }
  function HandleSubmit() {
    event?.preventDefault();
    getCity(city);
  }

  return (
    <CentralizerContainer>
      <AppStylingContainer>
        <WeatherBox
          nameOfCity={cityNameData}
          country={country}
          flag={countryFlag}
          hide={hide}
          temperature={cityTemp.toString()}
          clouds={clouds}
          wind={wind} 
          humidity={humidity}          
          />
        <FormContainer onSubmit={HandleSubmit}>
          <input placeholder="City name goes here" type="text" onChange={CheckInput} />
          <button>Get Weather</button>
        </FormContainer>
      </AppStylingContainer>
    </CentralizerContainer>
  )
}