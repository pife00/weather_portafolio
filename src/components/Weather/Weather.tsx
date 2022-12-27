import { DateTime } from "luxon";


type Props = {
  temp: number;
  name: string;
  state: string;
};

export const Weather: React.FC<Props> = (props: Props) => {

 const today = DateTime.now().setLocale('en').toFormat('MMMM dd, yyyy') 
  let name = props.name != undefined ? props.name : "";
  let state = props.state != undefined ? props.state : "";

  return (
    <div className="flex">
      <h1 className="text-9xl font-semibold text-white">
        {props.temp != undefined ? Math.round(props.temp) : ""}°
      </h1>

      <div className="sm:mt-14">
        <div className=" text-2xl ml-2 font-semibold text-gray-300 dark:text-gray-400">
          {props.name != undefined ? `${name},${state}` : ""}
        </div>

        { <div className=" text-2xl ml-2 font-semibold text-gray-300">
          {today}
        </div> }
      </div>
    </div>
  );
};
