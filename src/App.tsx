import { useEffect, useState } from "react";
import { InputSearch } from "./components/InputSearch/inputSearch";
import { Weather } from "./components/Weather/Weather";
import City from './models/Cities'
import { WeatherMain, Weather_City } from "./models/Weather";
import { ImageBackground } from "./components/backgroumd/ImageBackground";


function App() {
  const API_KEY = "2bd2c387e35895f4fbbae66577a5a17f";
  const [weather, setWeather] = useState<Weather_City>();
  const [state, setState] = useState("");
  const [weatherMain, setWeatherMain] = useState<WeatherMain>();

  const getWeather = async (location: City) => {
    const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url_weather);
    const json = await response.json();
    console.log(json)
    setWeatherMain(json!.weather[0])
    setWeather(json);
  };

  const successPosition = (pos: any) => {
    const cordenates = pos.coords;
    console.log(cordenates);
    console.log(`Latitud : ${cordenates.latitude}`);
    console.log(`Longitud: ${cordenates.longitude}`);
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    // getLocation()
    //navigator.geolocation.getCurrentPosition(successPosition,error)
  }, []);

  const search = async (location: City) => {
    setState(location.state)
    await getWeather(location);

  };

  return (
    <header
      className="relative flex  h-screen mb-12  scrollbar-hide">
      <div
        className="relative z-30 p-5 text-2xl ml-32  text-white  rounded-xl">
        <InputSearch sendLocation={search} />
      </div>

      <ImageBackground weather={weatherMain} />

      {weather?.name == undefined ? (
        <p></p>
      ) : (
        <div
          className="mt-96 ml-96 relative z-30 p-5 text-2xl  
           text-white  
           rounded-5xl"
        >
          <Weather temp={weather.main.temp} name={weather.name} state={state} />
        </div>
      )}
    </header>
  );
}

export default App;
