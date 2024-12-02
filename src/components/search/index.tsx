import React, {useEffect, useMemo} from 'react';
import cl from "./search.module.css"
import Icon from "../icon";
import {useAppSelector} from "../../hooks/useAppSelector";
import {clearListCity, homeReducer, setListCity, setSearchString} from "../../redux/home/reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getWeather} from "../../redux/home/action";
import {debounce} from "../../utils/debounce";
import {useFetching} from "../../hooks/useFetching";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";
import {TCityList} from "../../utils/types/cityList";
import {getListCity} from "../../utils/api/weather/getListCity";
const Search = () => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector(store => store.homeReducer.searchString)
    const cityList = useAppSelector(store => store.homeReducer.cityList)

    const [fetch,loading,error] = useFetching(async (searchString)=>{
        const res:TCityList[] = await getListCity(searchString)
        dispatch(setListCity(res))
    })

    const debouncedFetch = useMemo(
        ()=> debounce(fetch,1000),
        []
    )

    const handlerSearchField = (e:any) =>{
            dispatch(setSearchString(e.target.value))

    }

    useEffect(()=>{
        if (searchString.length > 2){
            debouncedFetch(searchString)
        }
        if(searchString === ""){
            dispatch(clearListCity())
        }
    },[searchString])

    return (
        <div className={cl.search}>
            <form className={cl.form}
            >
                <input
                    type="text"
                    className={cl.field}
                    placeholder="Укажите город"
                    value={searchString}
                    onChange={(e) => {
                        handlerSearchField(e)
                    }}
                />

                <div className={cl.list__result}
                     style={cityList.length === 0 || searchString === "" ? {display: "none"} : {display: "flex"}}>
                    {
                        cityList.map((city: TCityList) => (
                            <div className={cl.list__item} key={city.lat}>
                                {
                                    city.local_names === undefined ? city.name : city.local_names.ru
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={cl.info}>
                    {/*<Icon id={"arrow"} className={cl.arrow}/>*/}
                    <p className={cl.text}>
                        <Icon id={"arrow"} className={cl.arrow}/>
                        Начните вводить город, <br/> например, <a className={cl.link} onClick={() => {
                        dispatch(setSearchString("Ижевск"))
                    }}>Ижевск</a>
                    </p>
                </div>
            </form>


        </div>
    );
};

export default Search;