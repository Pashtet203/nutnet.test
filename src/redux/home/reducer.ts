import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStateHomeReducer} from "../../utils/types/redux";
import {TCityList} from "../../utils/types/cityList";
import {TWeatherInCity} from "../../utils/types/weather";


const initialState:IInitialStateHomeReducer = {
    searchString:"",
    cityList:[],
    weatherInCity: null,
    favoriteCity:[],
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
        }
    },
    extraReducers: builder =>
        builder
            // .addCase(getWeather.fulfilled,(state,action)=>{
            //     console.log(action.payload)
            // })
})

export const homeReducer = homeSlice.reducer
export const {
    setSearchString,
    clearListCity,
    setListCity,
    setWeatherInCity,
} = homeSlice.actions