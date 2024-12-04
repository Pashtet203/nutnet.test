import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {addCityInFavoriteList, removeCityInFavoriteList, setWeatherInCity} from "../../redux/home/reducer";
import cl from "./city.module.css"
import BackPage from "../../components/back-page";
import FavoriteIcon from "../../components/favorite-icon";
import {useAppSelector} from "../../hooks/useAppSelector";
import Icon from "../../components/icon";
import {decodingUNIX} from "../../utils/decodingUNIX";
import {TWeatherInCity} from "../../utils/types/weather";

const CityPage = () => {

    const {coordinate} = useParams()
    const [lat ,lon]:any  = coordinate?.split("-")
    const dispatch = useAppDispatch();

    const cityInfo = useAppSelector(store => store.homeReducer.weatherInCity)
    const favoriteCities = useAppSelector(store => store.homeReducer.favoriteCites)
    const [fetchWeatherInCity,loading,error]= useFetching(async ()=>{
        const res = await getWeatherInCity(lat,lon)
        dispatch(setWeatherInCity(res))
    })
    const checkCityInFavoriteList = ()=>{
        return favoriteCities.find(item => item.coord.lat === cityInfo?.coord.lat && item.coord.lon === cityInfo?.coord.lon )
    }

    const handlerFavorite = () =>{
        if (checkCityInFavoriteList()){
            dispatch(removeCityInFavoriteList({lat:Number(cityInfo?.coord.lat), lon:Number(cityInfo?.coord.lon)}))
        }
        else {
            dispatch(addCityInFavoriteList(cityInfo as TWeatherInCity))
        }
    }

    useEffect(()=>{
        fetchWeatherInCity()
    },[])
    return (
        <div className={cl.city}>
            <div className={cl.header}>
                <BackPage/>
                <div className={cl.favorite} onClick={()=>{handlerFavorite()}}>
                    <FavoriteIcon className={checkCityInFavoriteList() ? cl.favorite__iconActive : cl.favorite__icon} />
                </div>
            </div>
            <div className={cl.weather__info}>
                <h3 className={cl.name}>
                    {cityInfo?.name}
                </h3>
                <p className={cl.description}>
                    {cityInfo?.weather[0].description}
                </p>
                <div className={cl.weather}>
                    <div className={cl.temperature}>
                        {Math.round(cityInfo?.main.temp as number)} &deg;
                    </div>
                    <Icon id={cityInfo?.weather[0].main as string} className={cl.weather__icon} width={191} height={191}/>
                </div>
                <div className={cl.pressure}>
                    <Icon id={"barometer"} width={24} height={24}/>
                    <p className={cl.pressure__info}>
                        {cityInfo?.main.pressure} мм. рт.ст
                    </p>
                </div>
                <div className={cl.sun}>
                    <div className={cl.sunrise}>
                        Восход: <p>{decodingUNIX(Number(cityInfo?.sys.sunrise))}</p>

                    </div>
                    <div className={cl.sunset}>
                        Закат: <p>{decodingUNIX(Number(cityInfo?.sys.sunset))}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CityPage;