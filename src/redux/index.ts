import {configureStore} from "@reduxjs/toolkit";
import {homeReducer} from "./home/reducer";


export const store = configureStore({
    reducer:{
        homeReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch