import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStateHomeReducer} from "../../utils/types/redux";
import {getCities, getWeather} from "./action";


const initialState:IInitialStateHomeReducer = {
    searchString:""
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers:{
        setSearchString:(state: IInitialStateHomeReducer,action:PayloadAction<string>) => {
            state.searchString = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getWeather.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
            .addCase(getCities.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
})

export const homeReducer = homeSlice.reducer
export const {
    setSearchString,
} = homeSlice.actions