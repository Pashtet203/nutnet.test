import {checkResponse} from "../../checkResponse";


export async function getWeatherInCity(city: string) {

    let option:RequestInit ={
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        }
    }
    return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=c96e4811a5e6ab36888d6bee666c1af1`).then(checkResponse)
}