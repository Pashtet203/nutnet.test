import {createAsyncThunk} from "@reduxjs/toolkit";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";
import {getListCity} from "../../utils/api/weather/getListCity";


export const getWeather = createAsyncThunk(
    'home/getWeather',
    async (city:string) =>{
        return await getWeatherInCity(city)
    }
)
