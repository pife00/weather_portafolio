import { useEffect, useState } from "react";
import { TextInput, Label, Button } from "flowbite-react";

interface City {
  country: string
  lat: number
  lon: number
  name: string
  state: string
}

type Weather_City = {
  name:string,
  state:string,
  coord: {
    lat: number,
    lon: number
  }
  main: {
    feels_like: number
    grnd_level: number
    humidity:number
    pressure:number
    sea_level:number
    temp:number
    temp_max:number
    temp_min:number
  }
  weather:[
    {
      description:string, 
      icon:string,
      id:number,
      main:string,
    }
  ]
}


function App() {
  

  const API_KEY = "2bd2c387e35895f4fbbae66577a5a17f"
  const [weather, setWeather] = useState <Weather_City>()
  
  const [city, setCity] = useState('')

  const getLocation = async () => {
    const url_location = ` http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    const response = await fetch(url_location)
    const json = await response.json()
    setWeather( (prevState:any) =>({
      ...prevState,
      state:json[0].state
    }))
    return json[0]
  }

  const getWeather = async (location: City) => {

    const url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`
    const response = await fetch(url_weather)
    const json = await response.json()
    
   await setWeather((prevState:any) =>({
      ...prevState,
      ...json
    }))
    
  }

  const successPosition = (pos: any) => {
    const cordenates = pos.coords
    console.log(cordenates)
    console.log(`Latitud : ${cordenates.latitude}`);
    console.log(`Longitud: ${cordenates.longitude}`);
  }

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    // getLocation()
    //navigator.geolocation.getCurrentPosition(successPosition,error)

  }, [])

  const search = async () => {
    let location: City = await getLocation()
    await getWeather(location)
  }

  return (

    <div className="">
      <figure className="relative">
        <img
          className="rounded-lg"
          src="../src/assets/pexels-bob-clark-21492.jpg"
          alt=""
        />
      </figure>
      <figcaption className="absolute bottom-6 px-4 ml-32">

        <div className="flex" >

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email3"
                value="Your email"
              />
            </div>
            <TextInput
              id="email3"
              type="email"
              onChange={(e) => setCity(e.target.value)}
              placeholder="name@flowbite.com"
              required={true}

            />
            <Button color="light" onClick={search} >
              Buscar
            </Button>
          </div>

          <h1 className="text-9xl font-semibold text-white">
             {weather?.main.temp != undefined? Math.round(weather?.main.temp):''}° 
          </h1>

          <div className="sm:mt-14" >

            <div className=" text-2xl ml-2 font-semibold text-gray-500 dark:text-gray-400">
             {/* {weather?.name != undefined? `${weather.name}`:''} */}
            </div>

            <div className=" text-2xl ml-2 font-semibold text-gray-500 dark:text-gray-400">
              Martes 31 de Diciembre
            </div>

          </div>
        </div>
      </figcaption>
    </div>
  );
}

export default App;
