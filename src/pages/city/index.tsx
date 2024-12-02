import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setWeatherInCity} from "../../redux/home/reducer";

const CityPage = () => {

    const {coordinate} = useParams()
    const [lat ,lon]:any  = coordinate?.split("-")

    const dispatch = useAppDispatch();


    const [fetchWeatherInCity,loading,error]= useFetching(async ()=>{
        const res = await getWeatherInCity(lat,lon)
        dispatch(setWeatherInCity(res))
    })
    useEffect(()=>{
        fetchWeatherInCity()
    },[])
    return (
        <div>
            1234
        </div>
    );
};

export default CityPage;