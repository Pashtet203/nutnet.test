import React from 'react';
import Search from "../../components/search";
import cl from "./home.module.css"
import Icon from "../../components/icon";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import CardList from "../../components/cardList";

const HomePage = () => {

    const dispatch = useAppDispatch()
    const favoriteList = useAppSelector(store => store.homeReducer.favoriteCites)

    return (
        <div className={cl.home}>
            <Search/>

            <div className={cl.wrapper}>
                {
                    favoriteList.length === 0
                        ?
                        <div className={cl.info}>
                            <p>
                                Используйте значок «закладки»,
                                чтобы закрепить город на главной
                            </p>
                            <Icon id={"bookmark"} className={cl.bookmark} width={40} height={40}/>
                        </div>
                        :
                            <CardList citiesInfo={favoriteList}/>
                }
            </div>


        </div>
    );
};

export default HomePage;