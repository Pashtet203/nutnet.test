import React from 'react';
import Search from "../../components/search";
import cl from "./home.module.css"
import Icon from "../../components/icon";

const HomePage = () => {
    return (
        <div className={cl.home}>
            <Search/>

            <div className={cl.info}>
                Используйте значок «закладки»,
                чтобы закрепить город на главной
                <Icon id={"bookmark"} className={cl.bookmark}/>
            </div>

        </div>
    );
};

export default HomePage;