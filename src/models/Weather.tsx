export type WeatherMain = {
    id: string
    main: string
    description: string
    icon: string
}

export type Weather_City = {
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

