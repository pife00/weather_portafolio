import { useEffect, useState } from "react";
import { InputSearch } from "./components/InputSearch/inputSearch";
import { Weather } from "./components/Weather/Weather";
import City from "./models/Cities";
import { WeatherMain, Weather_City } from "./models/Weather";
import { ImageBackground } from "./components/backgroumd/ImageBackground";

import bg_default from "./assets/default/default.mp4";

import rain from "./assets/rain/rain.mp4";
import clouds from "./assets/clouds/clouds.mp4";
import snow from "./assets/snow/snow.mp4";
import clear from "./assets/clear/clear.mp4";
import drizzle from "./assets/Drizzle/Drizzle.mp4";
import thunderstorm from "./assets/Thunderstorm/Thunderstorm.mp4";

function App() {
  
  const [weather, setWeather] = useState<Weather_City>();
  const [state, setState] = useState("");
  const [weatherMain, setWeatherMain] = useState<WeatherMain>();
  const [bg, setBg] = useState(bg_default);
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER

  const getWeather = async (location: City) => {
    const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url_weather);
    const json = await response.json();

    const weatherMain = json!.weather[0];
    setWeatherMain(json!.weather[0]);
    setWeather(json);
    chooseBg(weatherMain);
  };

  const chooseBg = (weather: any) => {
    if (weather.main == "Clouds") setBg(clouds);
    if (weather.main == "Snow") setBg(snow);
    if (weather.main == "Clear") setBg(clear);
    if (weather.main == "Rain") setBg(rain);
    if (weather.main == "Drizzle") setBg(drizzle);
    if (weather.main == "Thunderstorm") setBg(thunderstorm);
  };


  const search = async (location: City) => {
    setState(location.state);
    await getWeather(location);
  };

  return (
    <>
      <header className="relative flex  h-screen mb-12  scrollbar-hide bg-black ">
        <div className="relative z-30 p-5 text-2xl ml-32  text-white  rounded-xl">
          <InputSearch sendLocation={search} />
        </div>

        <ImageBackground bgSource={bg} weather={weatherMain} />

        {weather?.name == undefined ? (
          <p></p>
        ) : (
          <div
            className="mt-96 ml-96 relative z-30 p-5   
           text-white "
          >
            <Weather
              temp={weather.main.temp}
              name={weather.name}
              state={state}
            />
          </div>
        )}
      </header>
    </>
  );
}

export default App;
