import { useState } from 'react'
import City from '../../models/Cities'


type Props = {
  sendLocation:(location:City)=>void
}

export const InputSearch:React.FC<Props> = (props:Props) => {

  const API_KEY = import.meta.env.VITE_OPEN_WEATHER;
  
  const [city, setCity] = useState("");
  const [cityOptions, setCityOptions] = useState<City[]>()

  const getLocation = async () => {
    const url_location = ` http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=0&appid=${API_KEY}&lang=es`;

    const response = await fetch(url_location);
    const json = await response.json();
    filterLocation(json)
  };

  const filterLocation = (json: any[]) => {
    setCityOptions(json)
  }

  const setMsg = (msg: string) => {
    setCity(msg);
  };

  let list = null;

  if (cityOptions?.length != undefined) {
    list = cityOptions.map((el, index) => <li onClick={()=>props.sendLocation(el)}  key={index} > {el.name}, {el.state} </li>)
  }

  const iconSearch =
    '<svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>';
  return (
    <div>
      <div className="flex outline-0 rounded-lg">
        <input
          placeholder="Cali,CO"
          type="text"
          className="
          text-lg
          border-none
          bg-transparent
          border-l-0
          border-r-0
          border-t-0
          border-l-transparent
          border-r-transparent
          border-t-transparent
        hover:border-b-white 
          rounded-lg font-bold
          block w-full p-2.5
          focus:ring-transparent 
          focus:border-l-none
          focus:border-t-none
          focus:border-r-none
          "
          onChange={(e) => setMsg(e.target.value)}
        />

        <button onClick={getLocation} className="relative bg-transparent">
          <div dangerouslySetInnerHTML={{ __html: iconSearch }} />
        </button>
      </div>
     
      <ul className="
        -mt-3 cursor-pointer 
        ml-3 text-lg font-semibold bg-transparent text-gray-500 absolute" >
        {list}
      </ul>

     
    </div>
  );
};
