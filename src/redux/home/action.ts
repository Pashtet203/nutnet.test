import {createAsyncThunk} from "@reduxjs/toolkit";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";


export const getWeather = createAsyncThunk(
    'home/getWeather',
    async (city:string) =>{
        return await getWeatherInCity(city)
    }
)