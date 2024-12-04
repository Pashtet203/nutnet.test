import React from 'react';
import cl from "./card.module.css"
import Icon from "../icon";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {removeCityInFavoriteList} from "../../redux/home/reducer";
import {Link} from "react-router-dom";

type TCard = {
    title: string;
    temp:number,
    imgName:string,
    lat:number,
    lon:number,
}

const Card = ({title,temp,imgName,lat,lon}:TCard) => {

    const dispatch = useAppDispatch()

    const deleteCity = (e:any) =>{
        e.preventDefault();
        dispatch(removeCityInFavoriteList({
            lat: lat,
            lon: lon,
        }))
    }

    return (
        <Link to={`/city/${lat}-${lon}`} className={cl.card}>
            <button className={cl.delete__btn} onClick={(e)=>{deleteCity(e)}}>
                <Icon id={"delete"} width={24} height={24} className={cl.icon}/>
            </button>
            <h5 className={cl.title}>{title}</h5>
            <div className={cl.temp}>
                {Math.round(temp)}&deg;
            </div>
            <Icon id={imgName} width={78} height={78}/>
        </Link>
    );
};

export default Card;