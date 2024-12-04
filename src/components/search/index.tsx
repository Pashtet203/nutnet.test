import React, {useEffect, useMemo, useRef} from 'react';
import cl from "./search.module.css"
import Icon from "../icon";
import {useAppSelector} from "../../hooks/useAppSelector";
import {clearListCity, homeReducer, setListCity, setSearchString} from "../../redux/home/reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {debounce} from "../../utils/debounce";
import {useFetching} from "../../hooks/useFetching";
import {TCityList} from "../../utils/types/cityList";
import {getListCity} from "../../utils/api/weather/getListCity";
import Highlighter from "react-highlight-words";
import {Link} from "react-router-dom";

const Search = () => {
    const dispatch = useAppDispatch();
    const searchString = useAppSelector(store => store.homeReducer.searchString)
    const cityList = useAppSelector(store => store.homeReducer.cityList)

    const inputSearchField = useRef<any>()
    const wrapperField = useRef<any>();

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

    const focusInput = () =>{
        if (searchString.length > 0 || cityList.length !== 0){
            wrapperField.current.classList.remove(`${cl.hide}`)
        }
    }
    const blurInput = () =>{
        wrapperField.current?.classList.add(`${cl.hide}`)
        inputSearchField.current?.classList.remove(`${cl.focus__input}`)
    }

    useEffect(()=>{
        wrapperField.current.classList.remove(`${cl.hide}`)
        if (searchString.length !== 0){
            if (!inputSearchField.current.classList.contains(`${cl.focus__input}`) || wrapperField.current.classList.contains(`${cl.hide}`)){
                inputSearchField.current.classList.add(`${cl.focus__input}`)
                wrapperField.current.classList.remove(`${cl.hide}`)
            }
            debouncedFetch(searchString)

        }
        else {

            inputSearchField.current.classList.remove(`${cl.focus__input}`)
            wrapperField.current.classList.add(`${cl.hide}`)
        }

        if(searchString === ""){
            dispatch(clearListCity())
        }
        if (cityList.length !== 0){
            wrapperField.current.classList.remove(`${cl.hide}`)
        }
    },[searchString.length])


    return (
        <div className={cl.search}>
            <form className={cl.form}
            >
                <input
                    ref={inputSearchField}
                    type="text"
                    onBlur={() => {setTimeout(()=>blurInput(),100)}}
                    onFocus={focusInput}
                    className={cl.field}
                    placeholder="Укажите город"
                    value={searchString}
                    onChange={(e) => {
                        handlerSearchField(e)
                    }}
                />

                <div className={cl.list__result} ref={wrapperField}>
                    {
                        cityList.length === 0 ?
                            <div className={cl.notCity}>
                                Такого города нет
                            </div>
                            :

                            cityList.map((city: TCityList) => (
                                <a className={cl.list__item} key={city.lat}>
                                    {
                                        city.local_names === undefined ?
                                            <Link to={`/city/${city.lat}-${city.lon}`} style={{color: "#8A91AB"}}
                                                  className={cl.result__link}>
                                                <Highlighter highlightClassName={cl.highliter}
                                                             searchWords={[searchString]} textToHighlight={city.name}/>

                                            </Link>

                                            :
                                            <Link to={`/city/${city.lat}-${city.lon}`} style={{color: "#8A91AB"}}
                                                  className={cl.result__link}>
                                                <Highlighter highlightClassName={cl.highliter}
                                                             searchWords={[searchString]}
                                                             textToHighlight={city.local_names.ru}/>
                                            </Link>

                                    }
                                </a>
                            ))
                    }
                </div>
            </form>
            <div className={cl.info}
                 style={searchString.length === 0 ? {visibility: "visible"} : {visibility: "hidden"}}>
                {/*<Icon id={"arrow"} className={cl.arrow}/>*/}
                <p className={cl.text}>
                    <Icon id={"arrow"} className={cl.arrow} width={38} height={32}/>
                    Начните вводить город, <br/> например, <a className={cl.link} onClick={() => {
                    dispatch(setSearchString("Ижевск"))
                }}>Ижевск</a>
                </p>
            </div>
        </div>
    );
};

export default Search;