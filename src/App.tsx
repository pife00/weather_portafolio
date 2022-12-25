import { useEffect, useState } from "react";
import { InputSearch } from "./components/InputSearch/inputSearch";
import { Weather } from "./components/Weather/Weather";

interface City {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

type Weather_City = {
  name: string;
  state: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
};

function App() {
  const API_KEY = "2bd2c387e35895f4fbbae66577a5a17f";
  const [weather, setWeather] = useState<Weather_City>();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const getLocation = async () => {
    const url_location = ` http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=0&appid=${API_KEY}&lang=es`;

    const response = await fetch(url_location);
    const json = await response.json();
    console.log(json);
    setState(json[0].state);
    return json[0];
  };

  const getWeather = async (location: City) => {
    const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url_weather);
    const json = await response.json();

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

  const search = async () => {
    let location: City = await getLocation();
    await getWeather(location);
  };

  const setMsg = (msg: string) => {
    setCity(msg);
  };

  return (
    <header
      className="relative flex  
    h-screen mb-12  scrollbar-hide
    "
    >
      <div
        className="relative z-30 p-5 text-2xl ml-32 
           text-white  
           rounded-xl"
      >
        <InputSearch search={search} setMsg={setMsg} />
      </div>

      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source
          src="../src/assets/pexels-taryn-elliott-8549595.mp4"
          type="video/mp4"
        />
      </video>

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
