import React, {useMemo} from 'react';
import cl from "./search.module.css"
import Icon from "../icon";
import {useAppSelector} from "../../hooks/useAppSelector";
import {homeReducer, setSearchString} from "../../redux/home/reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getCities, getWeather} from "../../redux/home/action";
import {debounce} from "../../utils/debounce";
import {useFetching} from "../../hooks/useFetching";
import {getWeatherInCity} from "../../utils/api/weather/getWeatherInCity";
const Search = () => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector(store => store.homeReducer.searchString)
    // const [fetch,loading,error] = useFetching(async ()=>{
    //     const res = await getWeatherInCity(searchString)
    // })

    // const debouncedFetch = useMemo(
    //     ()=> debounce(fetch as any,300),
    //     []
    // )
    // debouncedFetch()

    const startSearch = (e:any) =>{
        if (e.key === "Enter" && searchString.length >= 3){
            dispatch(getCities(searchString))
        }
    }

    return (
        <div className={cl.search}>
            <div className={cl.form}>
                <input
                    type="text"
                    className={cl.field}
                    placeholder="Укажите город"
                    value={searchString}
                    onKeyDown={(e)=>startSearch(e)}
                    onChange={(e) => {dispatch(setSearchString(e.target.value))}}
                />
                <div className={cl.info}>
                    {/*<Icon id={"arrow"} className={cl.arrow}/>*/}
                    <p className={cl.text}>
                        <Icon id={"arrow"} className={cl.arrow}/>
                        Начните вводить город, <br/> например, <a className={cl.link}>Ижевск</a>
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Search;