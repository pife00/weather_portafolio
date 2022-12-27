import { WeatherMain } from "../../models/Weather";

import { CSSTransition } from 'react-transition-group';
import React, { useEffect, useRef } from 'react'
import './my-node.css'
import { useState} from "react";
type Props = {
  weather: WeatherMain | undefined;
  bgSource:string,
};

export const ImageBackground: React.FC<Props> = (
  { weather,bgSource}: Props
) => {

  const nodeRef = useRef(null);

  const transition = " absolute z-10 w-auto min-w-full min-h-full max-w-none ";
  const [myClass, setMyClass] = useState(transition);
  const [inProp, setInProp] = useState(false);

  useEffect(()=>{
    setInProp(!inProp)
  },[bgSource])

  return (
    <React.Fragment  key={weather?.main ? weather.main : "rain"} >

      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={1000} classNames="my-node" >
      <video ref={nodeRef}
        key={weather?.main ? weather.main : "rain"}
        className={myClass}
        autoPlay
        loop
        muted
      >
        <source src={bgSource} type="video/mp4" />
      </video>
      </CSSTransition>

    </ React.Fragment>
      
  );
};
