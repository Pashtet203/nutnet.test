import {checkResponse} from "../../checkResponse";


export async function getListCity(str: string) {

    let option:RequestInit ={
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
        mode: "cors"
    }
    return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${str},ru&limit=5&lang=ru&appid=c96e4811a5e6ab36888d6bee666c1af1`).then(checkResponse)
}