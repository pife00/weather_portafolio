type Props = {
    temp:number,
    name:string,
    state:string,
}

export const Weather:React.FC<Props> = (props:Props) =>{
    return(
        <div className="flex">
          <h1 className="text-9xl font-semibold text-white">
            {props.temp != undefined
              ? Math.round(props.temp)
              : ""}
            °
          </h1>

          <div className="sm:mt-14">
            <div className=" text-2xl ml-2 font-semibold text-gray-300 dark:text-gray-400">
              {props.name != undefined ? `${props.name},${props.state}` : ""}
            </div>

            <div className=" text-2xl ml-2 font-semibold text-gray-300">
              Martes 31 de Diciembre
            </div>
          </div>
        </div>
    )
}