function App() {
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

        <h1 className="text-9xl font-semibold text-white">
          31{" "}
        </h1>

        <div className="sm:mt-14" >

          <div className=" text-2xl ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Quibdo
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
