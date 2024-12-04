import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStateHomeReducer} from "../../utils/types/redux";
import {TCityList} from "../../utils/types/cityList";
import {TWeatherInCity} from "../../utils/types/weather";


const initialState:IInitialStateHomeReducer = {
    searchString:"",
    cityList:[],
    weatherInCity: null,
    favoriteCites:[],
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers:{
        setSearchString:(state: IInitialStateHomeReducer,action:PayloadAction<string>) => {
            state.searchString = action.payload;
        },
        setListCity:(state,action:PayloadAction<TCityList[]>) => {
            state.cityList = action.payload;
        },
        clearListCity:(state) =>{
            state.cityList = []
        },
        setWeatherInCity:(state,action:PayloadAction<TWeatherInCity>) => {
            state.weatherInCity = action.payload;
        },
        addCityInFavoriteList:(state,action:PayloadAction<TWeatherInCity>) => {
            state.favoriteCites = [...state.favoriteCites, action.payload]
        },
        removeCityInFavoriteList:(state,action:PayloadAction<{lat:number,lon:number}>) => {
            state.favoriteCites = state.favoriteCites.filter(item => item.coord.lat !== action.payload.lat && item.coord.lon !== action.payload.lon);
        }
    },
})

export const homeReducer = homeSlice.reducer
export const {
    setSearchString,
    clearListCity,
    setListCity,
    setWeatherInCity,
    addCityInFavoriteList,
    removeCityInFavoriteList,
} = homeSlice.actions