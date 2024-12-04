export type TWeatherInCity = {
    name:string,
    coord:{
        lon: number,
        lat: number,
    }
    main:{
        temp:number,
        pressure:number,
    },
    sys:{
        sunrise:number,
        sunset:number,
    },
    weather:[
        {
            id: number,
            description:string,
            main:string
        }
    ]

}