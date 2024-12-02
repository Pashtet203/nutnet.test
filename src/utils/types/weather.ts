export type TWeatherInCity = {
    name:string,
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