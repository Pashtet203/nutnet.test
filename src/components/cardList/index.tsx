import React from 'react';
import {TWeatherInCity} from "../../utils/types/weather";
import cl from "./cardList.module.css"
import Card from "../card";

type TCardList = {
    citiesInfo: TWeatherInCity[];
}

const CardList = ({citiesInfo}:TCardList) => {
    return (
        <div className={cl.cardList}>
            {
                citiesInfo.map((item: TWeatherInCity) => (
                    <Card title={item.name} temp={item.main.temp} imgName={item.weather[0].main} lat={item.coord.lat} lon={item.coord.lon}/>
                ))
            }
        </div>
    );
};

export default CardList;