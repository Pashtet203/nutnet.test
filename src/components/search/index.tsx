import React from 'react';
import cl from "./search.module.css"
import Icon from "../icon";
import {useAppSelector} from "../../hooks/useAppSelector";
import {homeReducer, setSearchString} from "../../redux/home/reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getWeather} from "../../redux/home/action";
const Search = () => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector(store => store.homeReducer.searchString)

    return (
        <div className={cl.search}>
            <form className={cl.form}>
                <input
                    type="text"
                    className={cl.field}
                    placeholder="Укажите город"
                    value={searchString}
                    onChange={(e) => {dispatch(setSearchString(e.target.value))}}
                />
                <div onClick={()=>{dispatch(getWeather("asdaddad"))}}>
                    ioeruwgpiewugwegrg
                </div>
                <div className={cl.info}>
                    {/*<Icon id={"arrow"} className={cl.arrow}/>*/}
                    <p className={cl.text}>
                        <Icon id={"arrow"} className={cl.arrow}/>
                        Начните вводить город, <br/> например, <a className={cl.link}>Ижевск</a>
                    </p>
                </div>

            </form>

        </div>
    );
};

export default Search;