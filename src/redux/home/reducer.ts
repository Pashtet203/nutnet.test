import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStateHomeReducer} from "../../utils/types/redux";
import {getWeather} from "./action";
import {TCityList} from "../../utils/types/cityList";


const initialState:IInitialStateHomeReducer = {
    searchString:"",
    cityList:[],
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
    },
    extraReducers: builder =>
        builder
            .addCase(getWeather.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
})

export const homeReducer = homeSlice.reducer
export const {
    setSearchString,
    clearListCity,
    setListCity
} = homeSlice.actions