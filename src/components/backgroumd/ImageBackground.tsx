import { WeatherMain } from "../../models/Weather"


import bg_default from '../../assets/default/default.mp4'
import rain from '../../assets/rain/rain.mp4'
import clouds from '../../assets/clouds/clouds.mp4'
import snow from '../../assets/snow/snow.mp4'
import clear from '../../assets/clear/clear.mp4'
import drizzle from '../../assets/Drizzle/Drizzle.mp4'
import thunderstorm from '../../assets/Thunderstorm/Thunderstorm.mp4'

import {useState,useEffect} from 'react';
type Props = {
  weather:WeatherMain|undefined
}

export const ImageBackground:React.FC<Props> = ({weather}:Props) => {
  //const mainW = ['Thunderstorm','Drizzle','Rain','Snow','Clouds']
  const [bg,setBg] = useState(bg_default)
  useEffect(()=>{
    if(weather?.main != undefined){
      if(weather.main == 'Clouds') setBg(clouds)
      if(weather.main == 'Snow') setBg(snow)
      if(weather.main == 'Clear') setBg(clear)
      if(weather.main == 'Rain') setBg(rain)
      if(weather.main == 'Drizzle') setBg(drizzle)
      if(weather.main == 'Thunderstorm') setBg(thunderstorm)
    }
  },[weather])
  
  return (

    <video key={ weather?.main? weather.main  :'rain' }
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      autoPlay
      loop
      muted
    >
      <source
        src={bg}
        type="video/mp4"
      />
    </video>

  )
}