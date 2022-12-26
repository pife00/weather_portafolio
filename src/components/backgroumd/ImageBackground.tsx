import { WeatherMain } from "../../models/Weather";

import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react'
import './my-node.css'

import bg_default from "../../assets/default/default.mp4";
import rain from "../../assets/rain/rain.mp4";
import clouds from "../../assets/clouds/clouds.mp4";
import snow from "../../assets/snow/snow.mp4";
import clear from "../../assets/clear/clear.mp4";
import drizzle from "../../assets/Drizzle/Drizzle.mp4";
import thunderstorm from "../../assets/Thunderstorm/Thunderstorm.mp4";

import { useState, useEffect } from "react";
type Props = {
  weather: WeatherMain | undefined;
};

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};




export const ImageBackground: React.FC<Props> = (
  { weather }: Props,
) => {
  //const mainW = ['Thunderstorm','Drizzle','Rain','Snow','Clouds']

  const nodeRef = useRef(null);

  const transition = " absolute z-10 w-auto min-w-full min-h-full max-w-none ";
  const [bg, setBg] = useState(bg_default);
  const [myClass, setMyClass] = useState(transition);
  const [inProp, setInProp] = useState(false);
  

  let show = "absolute z-10 w-auto min-w-full min-h-full max-w-none";
  useEffect(() => {
    setTimeout(() => {
      if (weather?.main != undefined) {
        if (weather.main == "Clouds") setBg(clouds);
        if (weather.main == "Snow") setBg(snow);
        if (weather.main == "Clear") setBg(clear);
        if (weather.main == "Rain") setBg(rain);
        if (weather.main == "Drizzle") setBg(drizzle);
        if (weather.main == "Thunderstorm") setBg(thunderstorm);
        console.log("Me ejecute");
        setMyClass("absolute z-10 w-auto min-w-full min-h-full max-w-none");
      }
    }, 3000);
  }, [weather]);

  return (
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={2000} classNames="my-node">
      <video ref={nodeRef}
        key={weather?.main ? weather.main : "rain"}
        className={myClass}
        autoPlay
        loop
        muted
      >
        <source src={bg} type="video/mp4" />
      </video>
      </CSSTransition>
      
  );
};
