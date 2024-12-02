import {checkResponse} from "../../checkResponse";


export async function getWeatherInCity(city: string) {

    let option:RequestInit ={
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
        mode: "cors"
    }
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=c96e4811a5e6ab36888d6bee666c1af1`).then(checkResponse)
}


   // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c96e4811a5e6ab36888d6bee666c1af1` для данных по конкретному городу

   // `http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&limit=5&appid=c96e4811a5e6ab36888d6bee666c1af1` для поиска всех городов по подстроке